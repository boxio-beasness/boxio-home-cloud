import { useState } from "react";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { Smartphone, ArrowRight } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Pairing = () => {
  const [code, setCode] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const handlePairing = async () => {
    if (!code.trim()) {
      toast({
        title: "Codice richiesto",
        description: "Inserisci il codice del tuo dispositivo",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    
    // Simulazione validazione (da collegare a Supabase Edge Function)
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "Dispositivo trovato!",
        description: "Procedi con la registrazione",
      });
      navigate("/auth");
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/20 to-background">
      <div className="container mx-auto px-6 pt-32 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-md mx-auto"
        >
          <div className="text-center mb-8">
            <div className="inline-flex w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-accent items-center justify-center mb-4">
              <Smartphone className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-3xl font-bold mb-2">Collega il tuo Boxio</h1>
            <p className="text-muted-foreground">
              Inserisci il codice univoco del tuo dispositivo per iniziare
            </p>
          </div>

          <Card className="border-border/50 shadow-lg">
            <CardHeader>
              <CardTitle>Codice dispositivo</CardTitle>
              <CardDescription>
                Trovi il codice sul display del tuo Boxio o nell'app mobile
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Input
                placeholder="es. BOXIO-A3F8-92B1"
                value={code}
                onChange={(e) => setCode(e.target.value.toUpperCase())}
                className="text-center text-lg font-mono tracking-wider"
                maxLength={16}
              />
              
              <Button
                onClick={handlePairing}
                disabled={isLoading}
                className="w-full gap-2"
                size="lg"
              >
                {isLoading ? "Connessione in corso..." : "Connetti dispositivo"}
                <ArrowRight className="w-4 h-4" />
              </Button>

              <p className="text-sm text-muted-foreground text-center">
                Non hai ancora un Boxio?{" "}
                <a href="#" className="text-primary hover:underline">
                  Acquistalo qui
                </a>
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default Pairing;
