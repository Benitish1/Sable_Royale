# Sable Royale — Frontend

Luxury hotel website + management dashboard built with **Next.js 14, React, TypeScript and Tailwind CSS**.

**Live demo:** https://sable-royale.vercel.app

It currently runs on **demo data** (saved in the browser's localStorage) so it works without a backend.

## Run it

```bash
cd frontend
npm install
npm run dev        # http://localhost:3000
```

## Accounts & who can do what

| Who | How they get an account | Where they sign in | What they can do |
|---|---|---|---|
| **Guests (clients)** | Create their own account at `/register` | `/login` | Book rooms, order food, book spa, track orders |
| **Staff** | The admin creates their login in **Dashboard → Staff** | Staff portal: `/login?portal=staff` (link in footer) | Manage reservations, kitchen, rooms, housekeeping |
| **Admin** | Created by another admin (Dashboard → Staff, access level "Admin") | Staff portal | Everything, including staff logins & users |

- Visitors can browse freely, but must **create an account (or sign in) before booking or ordering**.
- Admin & staff **cannot** book or order on the guest website; they work from the dashboard.

Demo logins:

| Role  | Email               | Password  |
|-------|---------------------|-----------|
| Admin | admin@sableroyale.com  | admin123  |
| Staff | staff@sableroyale.com  | staff123  |
| Guest | guest@sableroyale.com  | guest123  |

**Reset demo data** is in the dashboard sidebar.

## What's included

**Guest website**
- Home: hero with availability search, rooms, amenities, dining, spa, offers, events, reviews
- Rooms list (filters, live availability) and room detail with price calculator
- 3-step booking: dates & room → extras (breakfast, airport pickup…) → details & payment (card / mobile money / pay at hotel)
- Dining: restaurants, full menu with categories & search, basket, checkout (room service / dine-in / takeaway), live order tracking
- Spa & experiences booking (massage, yoga, airport transfer, safari…)
- Contact form, guest account (stays, orders, spa bookings, loyalty points, reviews, profile)

**Management dashboard** (admin & staff)
- Overview: occupancy, arrivals/departures, revenue chart, room status, live kitchen orders
- Reservations: search/filter, confirm, assign room, check-in, check-out, cancel
- Front desk room board by floor + room types & nightly rates
- Housekeeping task board (completing a task frees the room)
- Kitchen order board (New → Preparing → Ready → Delivered)
- Menu management (add/edit/delete, hide items)
- Spa & service requests, guests & user roles (admin), reviews moderation & inbox, staff (admin)

Tip: open the guest site and the kitchen board in two tabs — orders sync between tabs instantly.

## Customising

- Hotel name, phone, address, currency, tax: `lib/config.ts`
- Demo rooms, menu, staff, photos: `lib/seed.ts`
- Colours & fonts: `tailwind.config.ts` (palette taken from the building: sand walls, slate columns, copper trims, glass blue, palm green)

## Connecting the backend later

All data access goes through one file: `lib/store.tsx`. Each action there (`login`, `createBooking`,
`placeOrder`, `setOrderStatus`, …) can be swapped for an API call to the FastAPI backend in `../backend`.
The data shapes the backend should return are defined in `lib/types.ts`.
