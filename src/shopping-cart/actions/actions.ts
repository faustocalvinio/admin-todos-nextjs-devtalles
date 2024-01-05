"use client";

import { getCookie, hasCookie, setCookie } from "cookies-next";

export const getCookieCart = (): { [id: string]: number } => {
   if (hasCookie("cart")) {
      const cookieCart = JSON.parse((getCookie("cart") as string) ?? "{}");
      return cookieCart;
   }

   return {};
};

export const addProductToCart = (id: string) => {
   const cookieCart = getCookieCart();

   if (cookieCart[id]) {
      cookieCart[id]++;
   } else {
      cookieCart[id] = 1;
   }

   setCookie("cart", JSON.stringify(cookieCart));
};

export const removeProductFromCart = (id: string) => {
   const cookieCart = getCookieCart();

   delete cookieCart[id];

   setCookie("cart", JSON.stringify(cookieCart));
};

export const removeSingleProductFromCart = (id: string) => {
   const cookieCart = getCookieCart();
   if (!cookieCart[id]) return;
   if (cookieCart[id] === 1) {
      delete cookieCart[id];
   } else {
      cookieCart[id]--;
   }

   setCookie("cart", JSON.stringify(cookieCart));
};
export const addSingleProductFromCart = (id: string) => {
   const cookieCart = getCookieCart();
   if (!cookieCart[id]) return;

   cookieCart[id]++;

   setCookie("cart", JSON.stringify(cookieCart));
};
