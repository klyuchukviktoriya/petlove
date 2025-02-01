// "use client";
// import { usePathname } from "next/navigation";
// import { useState, useEffect } from "react";
// import Loader from "@/components/Loader/Loader";

// export default function LoadingWrapper({ children }) {
//   const pathname = usePathname();
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     if (pathname !== "/") {
//       setLoading(true);
//       const timer = setTimeout(() => setLoading(false), 1000);
//       return () => clearTimeout(timer);
//     }
//   }, [pathname]);

//   return loading ? <Loader /> : children;
// }
"use client";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import Loader from "@/components/Loader/Loader";

export default function LoadingWrapper({ children }) {
  const pathname = usePathname();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 100); // Мгновенная загрузка (0.1 сек)
    return () => clearTimeout(timer);
  }, [pathname]);

  return loading ? <Loader /> : children;
}
