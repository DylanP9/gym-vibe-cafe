"use client";

import { useEffect, useRef, useState } from "react";
import { CheckoutCart } from "@/components/CheckoutCart";
import { MenuCategoryPanel } from "@/components/MenuCategoryPanel";
import { MenuCategorySidebar } from "@/components/MenuCategorySidebar";
import { MenuCategoryTabs } from "@/components/MenuCategoryTabs";
import { menuCategories } from "@/data/menu";
import { siteConfig } from "@/data/siteConfig";
import type { OrderableMenuItem } from "@/lib/menuPricing";
import type { CartItem } from "@/types/cart";

const cartStorageKey = "gym-vibe-cafe-cart";

export function MenuBrowser() {
  const [selectedId, setSelectedId] = useState(menuCategories[0].id);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const cartRef = useRef<HTMLDivElement | null>(null);
  const category =
    menuCategories.find((menuCategory) => menuCategory.id === selectedId) ??
    menuCategories[0];

  useEffect(() => {
    function selectFromHash() {
      const categoryId = window.location.hash.replace("#menu-panel-", "");

      if (menuCategories.some((menuCategory) => menuCategory.id === categoryId)) {
        setSelectedId(categoryId);
      }
    }

    selectFromHash();
    window.addEventListener("hashchange", selectFromHash);

    return () => window.removeEventListener("hashchange", selectFromHash);
  }, []);

  useEffect(() => {
    const storedCart = window.localStorage.getItem(cartStorageKey);

    if (!storedCart) {
      return;
    }

    try {
      const parsedCart = JSON.parse(storedCart) as CartItem[];

      if (Array.isArray(parsedCart)) {
        setCartItems(parsedCart);
      }
    } catch {
      window.localStorage.removeItem(cartStorageKey);
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem(cartStorageKey, JSON.stringify(cartItems));
  }, [cartItems]);

  function selectCategory(id: string) {
    setSelectedId(id);
    window.history.replaceState(
      null,
      "",
      `${window.location.pathname}${window.location.search}#menu-panel-${id}`,
    );
  }

  function addToCart(item: OrderableMenuItem) {
    setCartItems((items) => {
      const existingItem = items.find((cartItem) => cartItem.id === item.id);

      if (existingItem) {
        return items.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: Math.min(cartItem.quantity + 1, 20) }
            : cartItem,
        );
      }

      return [
        ...items,
        {
          id: item.id,
          name: item.name,
          price: item.price,
          pricePence: item.pricePence,
          quantity: 1,
        },
      ];
    });

    if (window.innerWidth < 1280) {
      window.setTimeout(() => {
        cartRef.current?.scrollIntoView({ block: "start", behavior: "smooth" });
      }, 0);
    }
  }

  function incrementCartItem(id: string) {
    setCartItems((items) =>
      items.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.min(item.quantity + 1, 20) }
          : item,
      ),
    );
  }

  function decrementCartItem(id: string) {
    setCartItems((items) =>
      items.flatMap((item) => {
        if (item.id !== id) return [item];
        if (item.quantity <= 1) return [];
        return [{ ...item, quantity: item.quantity - 1 }];
      }),
    );
  }

  function removeCartItem(id: string) {
    setCartItems((items) => items.filter((item) => item.id !== id));
  }

  return (
    <section className="section-shell" aria-label="Browse the menu">
      <div className="content-shell">
        <div className="mb-8 rounded-xl border border-[#a42425]/35 bg-[#151211] p-4 text-sm leading-6 text-[#d9d0c4]">
          <p>
            In-store prices are based on supplied cafe menu-board artwork.
            Delivery-platform prices may differ.
          </p>
          <p className="mt-2">
            Prices and availability may vary. Please check with the cafe for the
            latest information.
          </p>
          <p className="mt-2 font-semibold text-[#efcb9c]">
            Order now through Just Eat, or review a future in-site basket here
            while Square checkout is being finalised.
          </p>
          <a
            href={siteConfig.justEatOrderUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex min-h-11 items-center justify-center rounded-full border border-[#ba3032] bg-[#a42425] px-5 py-2 text-xs font-bold uppercase tracking-[0.12em] text-white hover:border-[#cc3e40] hover:bg-[#b92c2e]"
          >
            Order now on Just Eat
          </a>
        </div>
        <MenuCategoryTabs
          categories={menuCategories}
          selectedId={selectedId}
          onSelect={selectCategory}
        />
        <div className="grid items-start gap-6 xl:grid-cols-[17rem_minmax(0,1fr)_20rem]">
          <MenuCategorySidebar
            categories={menuCategories}
            selectedId={selectedId}
            onSelect={selectCategory}
          />
          <div className="order-2 xl:order-none">
            <MenuCategoryPanel category={category} onAddToCart={addToCart} />
          </div>
          <div ref={cartRef} className="order-1 scroll-mt-48 xl:order-none">
            <CheckoutCart
              items={cartItems}
              onIncrement={incrementCartItem}
              onDecrement={decrementCartItem}
              onRemove={removeCartItem}
              onClear={() => setCartItems([])}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
