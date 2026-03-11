import { useState } from "react";
import Navbar from "@/components/Navbar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogDescription,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Plus, ArrowRight, Check, Car, Phone, MapPin, Calendar } from "lucide-react";

type BookingStatus = "pending" | "in_progress" | "completed";

interface Booking {
  id: string;
  name: string;
  phone: string;
  carType: string;
  package: string;
  pickup: string;
  date: string;
  details: string;
  status: BookingStatus;
  createdAt: Date;
}

const statusConfig: Record<BookingStatus, { label: string; color: string; badgeClass: string }> = {
  pending: {
    label: "Pending",
    color: "bg-amber-500/20 text-amber-400 border-amber-500/30",
    badgeClass: "bg-amber-500/20 text-amber-300 border-amber-500/30",
  },
  in_progress: {
    label: "In Progress",
    color: "bg-blue-500/20 text-blue-400 border-blue-500/30",
    badgeClass: "bg-blue-500/20 text-blue-300 border-blue-500/30",
  },
  completed: {
    label: "Completed",
    color: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30",
    badgeClass: "bg-emerald-500/20 text-emerald-300 border-emerald-500/30",
  },
};

const carOptions = [
  "Maruti Dzire",
  "Toyota Innova",
  "Maruti WagonR",
  "Kia Carens",
  "Toyota Fortuner",
  "Maruti Ertiga",
];

const packageOptions = [
  "City Ride – 4 Hrs / 40 KM",
  "Half Day – 8 Hrs / 80 KM",
  "Full Day – 12 Hrs / 120 KM",
  "Outstation – Custom",
];

const sampleBookings: Booking[] = [
  {
    id: "1",
    name: "Rajesh Kumar",
    phone: "+91 98765 43210",
    carType: "Toyota Innova",
    package: "Half Day – 8 Hrs / 80 KM",
    pickup: "Jaipur Railway Station",
    date: "2026-03-15",
    details: "Airport pickup needed",
    status: "pending",
    createdAt: new Date("2026-03-10"),
  },
  {
    id: "2",
    name: "Priya Sharma",
    phone: "+91 87654 32109",
    carType: "Maruti Dzire",
    package: "Full Day – 12 Hrs / 120 KM",
    pickup: "Hotel Hilton, Jaipur",
    date: "2026-03-12",
    details: "Sightseeing tour",
    status: "in_progress",
    createdAt: new Date("2026-03-09"),
  },
  {
    id: "3",
    name: "Amit Singh",
    phone: "+91 76543 21098",
    carType: "Maruti WagonR",
    package: "City Ride – 4 Hrs / 40 KM",
    pickup: "Malviya Nagar, Jaipur",
    date: "2026-03-08",
    details: "",
    status: "completed",
    createdAt: new Date("2026-03-07"),
  },
];

const Dashboard = () => {
  const [bookings, setBookings] = useState<Booking[]>(sampleBookings);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    carType: "",
    package: "",
    pickup: "",
    date: "",
    details: "",
  });

  const addBooking = () => {
    if (!form.name || !form.phone || !form.carType || !form.package) return;
    const newBooking: Booking = {
      id: Date.now().toString(),
      ...form,
      status: "pending",
      createdAt: new Date(),
    };
    setBookings((prev) => [...prev, newBooking]);
    setForm({ name: "", phone: "", carType: "", package: "", pickup: "", date: "", details: "" });
    setDialogOpen(false);
  };

  const moveBooking = (id: string, newStatus: BookingStatus) => {
    setBookings((prev) =>
      prev.map((b) => (b.id === id ? { ...b, status: newStatus } : b))
    );
  };

  const columns: { status: BookingStatus; title: string; icon: React.ReactNode }[] = [
    { status: "pending", title: "Pending", icon: <Calendar className="w-5 h-5" /> },
    { status: "in_progress", title: "In Progress", icon: <Car className="w-5 h-5" /> },
    { status: "completed", title: "Completed", icon: <Check className="w-5 h-5" /> },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="pt-24 pb-16 px-4">
        <div className="container mx-auto max-w-7xl">
          {/* Header */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
            <div>
              <h1 className="text-3xl font-heading font-bold text-foreground">
                My Bookings
              </h1>
              <p className="text-muted-foreground mt-1">Track your ride bookings</p>
            </div>
            <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
              <DialogTrigger asChild>
                <Button className="bg-accent-gradient text-accent-foreground font-semibold rounded-lg hover:opacity-90 transition-opacity">
                  <Plus className="w-4 h-4 mr-2" />
                  New Booking
                </Button>
              </DialogTrigger>
              <DialogContent className="bg-card border-border max-w-md">
                <DialogHeader>
                  <DialogTitle className="text-foreground font-heading">New Booking</DialogTitle>
                  <DialogDescription className="text-muted-foreground">
                    Fill in the details to create a new booking request.
                  </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-2">
                  <div className="grid gap-2">
                    <Label className="text-foreground">Name *</Label>
                    <Input
                      placeholder="Your full name"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="bg-background border-border text-foreground"
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label className="text-foreground">Phone *</Label>
                    <Input
                      placeholder="+91 XXXXX XXXXX"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="bg-background border-border text-foreground"
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label className="text-foreground">Car Type *</Label>
                    <Select value={form.carType} onValueChange={(v) => setForm({ ...form, carType: v })}>
                      <SelectTrigger className="bg-background border-border text-foreground">
                        <SelectValue placeholder="Select a car" />
                      </SelectTrigger>
                      <SelectContent className="bg-card border-border">
                        {carOptions.map((c) => (
                          <SelectItem key={c} value={c} className="text-foreground">
                            {c}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="grid gap-2">
                    <Label className="text-foreground">Package *</Label>
                    <Select value={form.package} onValueChange={(v) => setForm({ ...form, package: v })}>
                      <SelectTrigger className="bg-background border-border text-foreground">
                        <SelectValue placeholder="Select a package" />
                      </SelectTrigger>
                      <SelectContent className="bg-card border-border">
                        {packageOptions.map((p) => (
                          <SelectItem key={p} value={p} className="text-foreground">
                            {p}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="grid gap-2">
                    <Label className="text-foreground">Pickup Location</Label>
                    <Input
                      placeholder="e.g. Jaipur Railway Station"
                      value={form.pickup}
                      onChange={(e) => setForm({ ...form, pickup: e.target.value })}
                      className="bg-background border-border text-foreground"
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label className="text-foreground">Date</Label>
                    <Input
                      type="date"
                      value={form.date}
                      onChange={(e) => setForm({ ...form, date: e.target.value })}
                      className="bg-background border-border text-foreground"
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label className="text-foreground">Additional Details</Label>
                    <Textarea
                      placeholder="Any special requirements..."
                      value={form.details}
                      onChange={(e) => setForm({ ...form, details: e.target.value })}
                      className="bg-background border-border text-foreground"
                    />
                  </div>
                  <Button
                    onClick={addBooking}
                    className="bg-accent-gradient text-accent-foreground font-semibold mt-2 hover:opacity-90"
                  >
                    Create Booking
                  </Button>
                </div>
              </DialogContent>
            </Dialog>
          </div>

          {/* Kanban Columns */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {columns.map((col) => {
              const colBookings = bookings.filter((b) => b.status === col.status);
              const config = statusConfig[col.status];
              return (
                <div key={col.status} className="space-y-4">
                  {/* Column Header */}
                  <div className="flex items-center gap-3 pb-3 border-b border-border">
                    <div className={`p-2 rounded-lg ${config.color}`}>
                      {col.icon}
                    </div>
                    <h2 className="font-heading font-semibold text-foreground text-lg">
                      {col.title}
                    </h2>
                    <Badge className={`ml-auto ${config.badgeClass} border`}>
                      {colBookings.length}
                    </Badge>
                  </div>

                  {/* Cards */}
                  {colBookings.length === 0 ? (
                    <div className="rounded-xl border border-dashed border-border p-8 text-center text-muted-foreground text-sm">
                      No bookings here
                    </div>
                  ) : (
                    colBookings.map((booking) => (
                      <div
                        key={booking.id}
                        className="rounded-xl border border-border bg-card p-4 space-y-3 shadow-sm hover:shadow-md transition-shadow"
                      >
                        <div className="flex items-start justify-between">
                          <h3 className="font-semibold text-foreground">{booking.name}</h3>
                          <Badge className={`${config.badgeClass} border text-xs`}>
                            {config.label}
                          </Badge>
                        </div>

                        <div className="space-y-1.5 text-sm text-muted-foreground">
                          <div className="flex items-center gap-2">
                            <Car className="w-3.5 h-3.5 text-accent" />
                            <span>{booking.carType}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Calendar className="w-3.5 h-3.5 text-accent" />
                            <span>{booking.package}</span>
                          </div>
                          {booking.pickup && (
                            <div className="flex items-center gap-2">
                              <MapPin className="w-3.5 h-3.5 text-accent" />
                              <span>{booking.pickup}</span>
                            </div>
                          )}
                          {booking.phone && (
                            <div className="flex items-center gap-2">
                              <Phone className="w-3.5 h-3.5 text-accent" />
                              <span>{booking.phone}</span>
                            </div>
                          )}
                          {booking.date && (
                            <p className="text-xs text-muted-foreground/70 pt-1">
                              Date: {booking.date}
                            </p>
                          )}
                        </div>

                        {/* Actions */}
                        <div className="flex gap-2 pt-1">
                          {booking.status === "pending" && (
                            <Button
                              size="sm"
                              variant="outline"
                              className="text-xs border-border text-foreground hover:bg-accent/10 hover:text-accent flex-1"
                              onClick={() => moveBooking(booking.id, "in_progress")}
                            >
                              Start <ArrowRight className="w-3 h-3 ml-1" />
                            </Button>
                          )}
                          {booking.status === "in_progress" && (
                            <Button
                              size="sm"
                              variant="outline"
                              className="text-xs border-border text-foreground hover:bg-emerald-500/10 hover:text-emerald-400 flex-1"
                              onClick={() => moveBooking(booking.id, "completed")}
                            >
                              Complete <Check className="w-3 h-3 ml-1" />
                            </Button>
                          )}
                          {booking.status === "completed" && (
                            <span className="text-xs text-emerald-400 flex items-center gap-1">
                              <Check className="w-3 h-3" /> Done
                            </span>
                          )}
                        </div>
                      </div>
                    ))
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
