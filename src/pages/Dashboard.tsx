import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Server, ExternalLink, Settings, HardDrive, Wifi, Power } from "lucide-react";
import Navbar from "@/components/Navbar";

const Dashboard = () => {
  // Mock data - da sostituire con dati reali da Supabase
  const devices = [
    {
      id: "1",
      name: "Boxio Casa",
      code: "BOXIO-A3F8-92B1",
      status: "online",
      storage: { used: 45, total: 100 },
      ip: "192.168.1.100",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/20 to-background">
      <Navbar />
      
      <div className="container mx-auto px-6 pt-24 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          <div>
            <h1 className="text-4xl font-bold mb-2">Dashboard</h1>
            <p className="text-muted-foreground">
              Gestisci i tuoi dispositivi Boxio
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {devices.map((device) => (
              <Card key={device.id} className="border-border/50 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                        <Server className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <CardTitle className="text-lg">{device.name}</CardTitle>
                        <CardDescription className="font-mono text-xs">
                          {device.code}
                        </CardDescription>
                      </div>
                    </div>
                    <Badge variant={device.status === "online" ? "default" : "secondary"}>
                      {device.status}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Storage</span>
                      <span className="font-medium">
                        {device.storage.used}GB / {device.storage.total}GB
                      </span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-primary to-accent h-2 rounded-full transition-all"
                        style={{ width: `${(device.storage.used / device.storage.total) * 100}%` }}
                      />
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Wifi className="w-4 h-4" />
                    <span>{device.ip}</span>
                  </div>

                  <div className="flex gap-2 pt-2">
                    <Button className="flex-1 gap-2" size="sm">
                      <ExternalLink className="w-4 h-4" />
                      Apri Boxio
                    </Button>
                    <Button variant="outline" size="sm">
                      <Settings className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}

            {/* Coming soon cards */}
            <ComingSoonCard
              icon={HardDrive}
              title="Gestione File"
              description="Carica, organizza e condividi i tuoi file"
            />
            <ComingSoonCard
              icon={Power}
              title="Backup Automatico"
              description="Backup automatico delle tue foto"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

const ComingSoonCard = ({ icon: Icon, title, description }: { 
  icon: any; 
  title: string; 
  description: string;
}) => (
  <Card className="border-dashed border-2 border-border/50 bg-muted/20">
    <CardHeader>
      <div className="flex items-center gap-3 opacity-60">
        <div className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center">
          <Icon className="w-6 h-6" />
        </div>
        <div>
          <CardTitle className="text-lg">{title}</CardTitle>
          <Badge variant="secondary" className="mt-1">
            Prossimamente
          </Badge>
        </div>
      </div>
    </CardHeader>
    <CardContent>
      <p className="text-sm text-muted-foreground">{description}</p>
    </CardContent>
  </Card>
);

export default Dashboard;
