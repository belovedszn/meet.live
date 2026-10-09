import Prototype from "@/components/product/Prototype";
import { Hero, Story } from "@/components/sections/Story";
import Nav from "@/components/navigation/Nav";
import ProductTabs from "@/components/sections/ProductTabs";
import Dashboard from "@/components/charts/Dashboard";
import Flow from "@/components/sections/Flow";
import AfricaMap from "@/components/sections/AfricaMap";
import { Motion } from "@/components/ui/Reveal";
export default function Page() {
  return <Motion><Nav /><main><Hero /><ProductTabs /><Prototype /><Dashboard /><Flow /><AfricaMap /><Story /></main></Motion>;
}
