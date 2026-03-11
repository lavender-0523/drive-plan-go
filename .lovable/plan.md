

## Customer Booking Dashboard

A customer-facing dashboard where users can see their bookings move through stages: **To Do → In Progress → Completed**. Data will be stored locally (resets on refresh) — good for a demo/prototype.

### What gets built

1. **New route `/dashboard`** — A booking tracker page with a Kanban-style board or status-grouped list showing bookings in three columns: Pending, In Progress, Completed.

2. **"Add Booking" form** — Lets customers create a booking entry with: name, phone, car type, package, pickup location, and date. New bookings start in "Pending."

3. **Status management** — Each booking card has buttons to move it to the next stage (Pending → In Progress → Completed).

4. **Navigation update** — Add a "My Bookings" link in the Navbar that routes to `/dashboard`.

5. **Local state** — All data managed via React `useState` (no database). Resets on page refresh.

### Layout

```text
┌─────────────────────────────────────────────┐
│  Navbar  [Home] [Plans] ... [My Bookings]   │
├─────────────────────────────────────────────┤
│  [+ New Booking]                            │
├──────────┬──────────────┬───────────────────┤
│ Pending  │ In Progress  │ Completed         │
│ ┌──────┐ │ ┌──────────┐ │ ┌───────────────┐ │
│ │Card  │ │ │Card      │ │ │Card           │ │
│ └──────┘ │ └──────────┘ │ └───────────────┘ │
└──────────┴──────────────┴───────────────────┘
```

### Files to create/modify

- **Create** `src/pages/Dashboard.tsx` — Main dashboard with state, columns, and add-booking dialog
- **Modify** `src/App.tsx` — Add `/dashboard` route
- **Modify** `src/components/Navbar.tsx` — Add "My Bookings" nav link

### Technical approach

- Use shadcn Dialog for the "New Booking" form
- Use shadcn Badge for status labels (color-coded)
- Cards styled consistently with existing design tokens
- Responsive: 3-column grid on desktop, stacked on mobile

