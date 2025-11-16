import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./schemas";

export default defineConfig({
  name: "default",
  title: "Dahayu Jewelry Blog",
  projectId: "iwx05zwi",
  dataset: "production",
  basePath: "/admin",
  plugins: [structureTool(), visionTool()],
  schema: {
    types: schemaTypes,
  },
});
