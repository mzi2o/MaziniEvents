import { Switch, Route, Router as WouterRouter } from "wouter";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import { PublicLayout } from "@/components/layout/public-layout";

import Home from "@/pages/home";
import Collections from "@/pages/collections/index";
import CollectionDetail from "@/pages/collections/[id]";
import Packages from "@/pages/packages";
import Gallery from "@/pages/gallery";
import ProductDetail from "@/pages/products/[id]";
import Contact from "@/pages/contact";

function Router() {
  return (
    <Switch>
      <Route path="/">
        <PublicLayout>
          <Home />
        </PublicLayout>
      </Route>
      <Route path="/collections">
        <PublicLayout>
          <Collections />
        </PublicLayout>
      </Route>
      <Route path="/collections/:id">
        {params => (
          <PublicLayout>
            <CollectionDetail id={params.id} />
          </PublicLayout>
        )}
      </Route>
      <Route path="/packages">
        <PublicLayout>
          <Packages />
        </PublicLayout>
      </Route>
      <Route path="/gallery">
        <PublicLayout>
          <Gallery />
        </PublicLayout>
      </Route>
      <Route path="/products/:id">
        {params => (
          <PublicLayout>
            <ProductDetail id={params.id} />
          </PublicLayout>
        )}
      </Route>
      <Route path="/contact">
        <PublicLayout>
          <Contact />
        </PublicLayout>
      </Route>
      <Route>
        <PublicLayout>
          <NotFound />
        </PublicLayout>
      </Route>
    </Switch>
  );
}

export default function App() {
  return (
    <TooltipProvider>
      <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
        <Router />
      </WouterRouter>
      <Toaster />
    </TooltipProvider>
  );
}
