# 💳Proyecto Web de Transacciones Bancarias - Angular

Este es un proyecto web desarrollado en Angular que simula una plataforma de transacciones bancarias. A continuación, se describe paso a paso cómo se construyó esta aplicación.

---

## 🚀1. Inicialización del Proyecto

```bash
npm install -g @angular/cli
ng new banco-app
cd banco-app
ng serve
```
>[!TIP]
>Usa ng serve -o para abrir automáticamente el navegador.

## 🎨2. Configuración de Estilos

- Se editaron estilos globales en `src/styles.css`.
- Se añadieron fuentes y estilos base.

>[!NOTE]
>Aquí puedes integrar Bootstrap, Tailwind u otro framework si deseas escalar la UI más fácilmente.
---

## 🧱3. Componentes de Botón Personalizados

```bash
ng generate component components/button1
ng generate component components/button2
```

- `button1`: estilo con fondo sólido.
- `button2`: estilo con borde y fondo transparente.
- Ambos fueron integrados en el componente `navbar`.

---

##  🧭4. Navbar y Footer

```bash
ng generate component layout/navbar
ng generate component layout/footer
```

- `navbar`: contiene los botones de navegación.
- `footer`: incluye información legal o enlaces.

>.[!IMPORTANT]
>Asegúrate de usar routerLink en los botones del navbar para una navegación fluida.
---

## 🧩5. Componente Layout (Plantilla General)

```bash
ng generate component layout/main-layout
```

- En `main-layout.component.html`:

```html
<app-navbar></app-navbar>
<router-outlet></router-outlet>
<app-footer></app-footer>
```

- Se configuró como base en el sistema de rutas.

>.[!TIP]
>Esto permite reutilizar la estructura general en todas las vistas principales.
---

## 🏠6. Vistas Home, Ayuda y Nosotros

```bash
ng generate component pages/home
ng generate component pages/ayuda
ng generate component pages/nosotros
```

- Se agregó contenido (texto, videos).
- Rutas configuradas y botones enlazados desde el navbar.

---

## 🔐7. Vista Login y Navegación

```bash
ng generate component pages/login
```

- Vista simple para ingresar.
- Al iniciar sesión, redirige a `/dashboard`.
- Navbar cambia dinámicamente a mostrar "Cerrar sesión" y acceso al dashboard.

>.[!WARNING]
>No se implementa seguridad real. Es solo una simulación de flujo.
---

## .[!WARNING]

No se implementa seguridad real. Es solo una simulación de flujo.8. Dashboard

```bash
ng generate component pages/dashboard
```

Contiene:
- Rango del usuario
- Balance
- Lista de transacciones
- Recompensas disponibles
- Botones: volver al home, hacer transferencia, depósito, reclamar recompensa

---

## 💸9. Vista Transferencia

- Al hacer clic en "Transferencia":
  - Se muestra un formulario con campos: destinatario, cuenta, monto.
  - Sección "Transferencias recientes" con usuarios frecuentes.
  - Al seleccionar uno, se autocompletan los datos en el formulario.

>.[!NOTE]
>Este componente mejora la experiencia del usuario con historial y autocompletado.
---

## 🏠10. Actualización del Home Post-login

- `home` ahora muestra botón hacia el dashboard.
- Opción de cerrar sesión visible en navbar si el usuario está logueado.

---

## 📌 Consideraciones Finales

- Proyecto desarrollado con Angular CLI.
- Arquitectura modular y escalable.
- Enrutamiento dinámico y uso de `router-outlet` para la vista principal.
- Componentes reutilizables.

---

> Desarrollado por Santiago Vera Bustamante - Proyecto académico de práctica con Angular 19.
