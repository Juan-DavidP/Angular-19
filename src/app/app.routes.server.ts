import { inject } from '@angular/core';
import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  {
    path: '**',
    renderMode: RenderMode.Prerender
  },
  {
    path: '/hydrate',
    renderMode: RenderMode.Client
  },
  {
    path:'/hydrate/:id',
    renderMode: RenderMode.Prerender,
    async getPrerenderParams() {
      const dataServices = inject(productService)
      const ids = await dataServices.getIds() // ["1", "2", "3"]
      return ids.map(id => ({id}))      
    },
  }
];
