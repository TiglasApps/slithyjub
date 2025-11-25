# SlithyJub

Piattaforma per la pubblicazione di pubblicità su pagine Instagram.

## Struttura del Progetto

- **backend/**: API NestJS (TypeScript) - Porta 3001
- **frontend/**: Applicazione Nuxt 3 (Vue 3 + Tailwind CSS) - Porta 3000

## Backend

### Tecnologie
- NestJS
- TypeScript
- CORS abilitato

### Avvio
```bash
cd backend
npm install
npm run start:dev
```

API di test disponibile su: `http://localhost:3001/api/test`

## Frontend

### Tecnologie
- Nuxt 3
- Vue 3
- Tailwind CSS
- Google Fonts (Inter)

### Avvio
```bash
cd frontend
npm install
npm run dev
```

Applicazione disponibile su: `http://localhost:3000`

### Funzionalità
- Landing page pubblica con design moderno
- Layout auth per future pagine di autenticazione
- Design responsive con Tailwind CSS
- Gradients, glassmorphism, e animazioni

## Sviluppo Futuro

- Sistema di autenticazione
- Upload immagini per pubblicità
- Programmazione pubblicazioni
- Dashboard analytics
- Integrazione con Instagram API
