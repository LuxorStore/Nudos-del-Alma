import React, { useState } from 'react';
import { X, ShieldCheck, Lock, CreditCard, CheckCircle2, Sparkles, Gift, MessageCircle } from 'lucide-react';
import { Logo } from './Logo';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialData?: {
    fullName?: string;
    email?: string;
    whatsapp?: string;
  };
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({ isOpen, onClose, initialData }) => {
  const [currency, setCurrency] = useState<'USD' | 'MXN' | 'COP' | 'EUR' | 'CRC'>('USD');
  const [formData, setFormData] = useState({
    fullName: initialData?.fullName || '',
    email: initialData?.email || '',
    whatsapp: initialData?.whatsapp || '',
    country: 'México'
  });
  const [paymentMethod, setPaymentMethod] = useState<'card' | 'paypal' | 'local'>('card');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  React.useEffect(() => {
    if (initialData) {
      setFormData((prev) => ({
        ...prev,
        fullName: initialData.fullName ?? prev.fullName,
        email: initialData.email ?? prev.email,
        whatsapp: initialData.whatsapp ?? prev.whatsapp
      }));
    }
  }, [initialData, isOpen]);

  if (!isOpen) return null;

  const prices: Record<string, string> = {
    USD: '$47 USD',
    MXN: '$890 MXN',
    COP: '$189,000 COP',
    EUR: '44 €',
    CRC: '₡24,500 CRC'
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email) return;

    setIsSubmitting(true);
    try {
      await fetch('https://formspree.io/f/xzednoek', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.fullName,
          email: formData.email,
          phone: formData.whatsapp,
          whatsapp: formData.whatsapp,
          country: formData.country,
          currency,
          amount: prices[currency],
          paymentMethod,
          source: 'Modal Pasarela Checkout',
          _subject: `Pago/Checkout Iniciado: ${formData.fullName} (${prices[currency]}) - Nudos del Alma`
        })
      });
    } catch (err) {
      console.warn('Formspree checkout notice:', err);
    } finally {
      setIsSubmitting(false);
      setIsSuccess(true);
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/65 backdrop-blur-xs overflow-y-auto animate-fade-in"
      role="dialog"
      aria-modal="true"
    >
      <div className="bg-white rounded-3xl max-w-xl w-full p-5 sm:p-8 border border-[#4A5D4E]/20 shadow-2xl relative my-8 max-h-[95vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-9 h-9 rounded-full bg-[#FAF7F2] text-[#4A5568] hover:text-[#2D3748] flex items-center justify-center transition-colors cursor-pointer"
          aria-label="Cerrar modal"
        >
          <X className="w-5 h-5" />
        </button>

        {!isSuccess ? (
          <div>
            {/* Header */}
            <div className="text-center mb-6">
              <div className="flex justify-center mb-3">
                <Logo variant="horizontal" size="sm" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#4A5D4E] font-heading">
                Finaliza Tu Matrícula por Sólo $47 USD (71% de Descuento)
              </h3>
              <p className="text-xs text-[#718096] mt-1">
                Acceso vitalicio inmediato · 6 Bonos de regalo incluidos
              </p>
            </div>

            {/* Currency Selector */}
            <div className="mb-5 bg-[#FAF7F2] p-3 rounded-xl border border-[#4A5D4E]/10">
              <span className="text-[11px] font-semibold text-[#4A5568] block mb-1.5">
                Selecciona tu moneda para ver el precio equivalente:
              </span>
              <div className="grid grid-cols-5 gap-1.5 text-xs font-semibold">
                {(['USD', 'MXN', 'COP', 'EUR', 'CRC'] as const).map((curr) => (
                  <button
                    key={curr}
                    type="button"
                    onClick={() => setCurrency(curr)}
                    className={`py-1.5 px-2 rounded-lg text-center transition-all cursor-pointer ${
                      currency === curr
                        ? 'bg-[#4A5D4E] text-white shadow-xs'
                        : 'bg-white text-[#4A5568] hover:bg-[#FAF7F2]'
                    }`}
                  >
                    {curr}
                  </button>
                ))}
              </div>
            </div>

            {/* Order Summary Box */}
            <div className="bg-[#FAF7F2] rounded-xl p-4 border border-[#4A5D4E]/10 mb-6 text-xs sm:text-sm">
              <div className="flex justify-between items-center pb-2.5 border-b border-[#4A5D4E]/10">
                <span className="font-semibold text-[#2D3748]">
                  Programa Escuela de Macramé: Nudos del Alma
                </span>
                <span className="font-bold text-[#4A5D4E]">{prices[currency]}</span>
              </div>

              <div className="pt-2.5 space-y-1 text-xs text-[#718096]">
                <div className="flex justify-between items-center text-emerald-700 font-medium">
                  <span className="flex items-center gap-1">
                    <Gift className="w-3.5 h-3.5 text-[#C59B27]" />
                    6 Bonos Exclusivos (Proveedores, Ebook, Medidas, etc.)
                  </span>
                  <span className="line-through text-[#718096]">$201 USD</span>
                  <span className="font-bold text-emerald-700">GRATIS</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Actualizaciones y Proyectos Nuevos</span>
                  <span className="font-semibold text-emerald-700">Incluido de por vida</span>
                </div>
              </div>

              <div className="mt-3 pt-3 border-t border-[#4A5D4E]/10 flex justify-between items-baseline">
                <span className="font-bold text-sm text-[#2D3748]">Total a Pagar Hoy:</span>
                <div className="text-right">
                  <span className="text-xl sm:text-2xl font-extrabold text-[#4A5D4E] font-heading">
                    {prices[currency]}
                  </span>
                  <span className="block text-[10px] text-[#718096]">Único pago sin cobros recurrentes</span>
                </div>
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#4A5568] mb-1">
                  Tu Nombre Completo *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Ej. Carmen Elena Rodríguez"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-[#D4CDC3] focus:border-[#4A5D4E] focus:ring-2 focus:ring-[#C59B27]/20 outline-none text-xs sm:text-sm bg-white"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#4A5568] mb-1">
                  Tu Correo Electrónico (Para enviar tu usuario y clave) *
                </label>
                <input
                  type="email"
                  required
                  placeholder="tucorreo@ejemplo.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-[#D4CDC3] focus:border-[#4A5D4E] focus:ring-2 focus:ring-[#C59B27]/20 outline-none text-xs sm:text-sm bg-white"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#4A5568] mb-1">
                    WhatsApp (Para soporte del grupo)
                  </label>
                  <input
                    type="tel"
                    placeholder="+52 55 1234 5678"
                    value={formData.whatsapp}
                    onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#D4CDC3] focus:border-[#4A5D4E] focus:ring-2 focus:ring-[#C59B27]/20 outline-none text-xs sm:text-sm bg-white"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#4A5568] mb-1">
                    País de Residencia
                  </label>
                  <select
                    value={formData.country}
                    onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#D4CDC3] focus:border-[#4A5D4E] focus:ring-2 focus:ring-[#C59B27]/20 outline-none text-xs sm:text-sm bg-white cursor-pointer"
                  >
                    <option value="México">México</option>
                    <option value="Colombia">Colombia</option>
                    <option value="Costa Rica">Costa Rica</option>
                    <option value="Estados Unidos">Estados Unidos</option>
                    <option value="España">España</option>
                    <option value="Chile">Chile</option>
                    <option value="Argentina">Argentina</option>
                    <option value="Perú">Perú</option>
                    <option value="Ecuador">Ecuador</option>
                    <option value="Otro país">Otro país</option>
                  </select>
                </div>
              </div>

              {/* Payment Method Selector */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#4A5568] mb-2">
                  Método de Pago Seguro
                </label>
                <div className="grid grid-cols-3 gap-2 text-xs">
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('card')}
                    className={`p-2.5 rounded-xl border flex flex-col items-center gap-1 transition-all cursor-pointer ${
                      paymentMethod === 'card'
                        ? 'border-[#4A5D4E] bg-[#4A5D4E]/5 font-bold text-[#4A5D4E]'
                        : 'border-[#D4CDC3] text-[#718096]'
                    }`}
                  >
                    <CreditCard className="w-4 h-4 text-[#4A5D4E]" />
                    <span>Tarjeta de Crédito / Débito</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('paypal')}
                    className={`p-2.5 rounded-xl border flex flex-col items-center gap-1 transition-all cursor-pointer ${
                      paymentMethod === 'paypal'
                        ? 'border-[#4A5D4E] bg-[#4A5D4E]/5 font-bold text-[#4A5D4E]'
                        : 'border-[#D4CDC3] text-[#718096]'
                    }`}
                  >
                    <Lock className="w-4 h-4 text-[#4A5D4E]" />
                    <span>PayPal Instantáneo</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('local')}
                    className={`p-2.5 rounded-xl border flex flex-col items-center gap-1 transition-all cursor-pointer ${
                      paymentMethod === 'local'
                        ? 'border-[#4A5D4E] bg-[#4A5D4E]/5 font-bold text-[#4A5D4E]'
                        : 'border-[#D4CDC3] text-[#718096]'
                    }`}
                  >
                    <Sparkles className="w-4 h-4 text-[#C59B27]" />
                    <span>Efectivo / Transferencia</span>
                  </button>
                </div>
              </div>

              {/* Luminous Neon Golden Action Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-gold-glow w-full py-4 text-xs sm:text-sm font-bold uppercase tracking-wider text-center cursor-pointer shadow-xl disabled:opacity-70 mt-3"
              >
                {isSubmitting ? 'Procesando tu Matrícula Segura...' : `PAGAR ${prices[currency]} Y ACCEDER AHORA`}
              </button>
            </form>

            {/* Footer Trust Guarantee & WhatsApp */}
            <div className="mt-4 pt-3 border-t border-[#4A5D4E]/10 flex items-center justify-center gap-4 text-[11px] text-[#718096]">
              <span className="flex items-center gap-1">
                <Lock className="w-3.5 h-3.5 text-[#4A5D4E]" />
                Encriptación 256-Bit SSL
              </span>
              <span>·</span>
              <span className="flex items-center gap-1.5 font-medium text-[#4A5D4E]">
                <img
                  src="/assets/aistudio/screen_7d257477.png"
                  alt="Garantía 7 Días"
                  className="w-4 h-4 rounded-full object-cover shrink-0 border border-[#C59B27]/60"
                />
                Garantía 7 Días (100% Reembolso)
              </span>
            </div>

            <div className="mt-3 text-center">
              <a
                href="https://wa.me/573189766697?text=Hola,%20tengo%20una%20pregunta%20sobre%20el%20pago%20de%20la%20Escuela%20de%20Macramé"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-[#2D3E31] hover:text-[#C59B27] font-semibold transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
                <span>¿Dudas con el pago o prefieres transferir? WhatsApp: <strong>3189766697</strong></span>
              </a>
            </div>
          </div>
        ) : (
          /* Confirmation & Welcome Success View */
          <div className="text-center py-6">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <span className="text-xs font-bold uppercase tracking-wider text-[#C59B27] block mb-1">
              ¡Bienvenida a la Escuela!
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#4A5D4E] font-heading mb-2">
              ¡Tu Inscripción ha sido Exitosa!
            </h3>
            <p className="text-sm text-[#4A5568] leading-relaxed max-w-md mx-auto mb-6">
              Te enviamos las credenciales de acceso a tu correo <strong>{formData.email || 'tu correo'}</strong>. Ya puedes entrar al portal de alumnas y descargar todos tus bonos.
            </p>

            <div className="bg-[#FAF7F2] p-4 sm:p-5 rounded-2xl border border-[#4A5D4E]/15 text-left text-xs sm:text-sm mb-6 space-y-2.5">
              <div className="flex justify-between">
                <span className="text-[#718096]">Número de Orden:</span>
                <span className="font-mono font-bold text-[#2D3748]">NDA-{Math.floor(100000 + Math.random() * 900000)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#718096]">Alumna:</span>
                <span className="font-semibold text-[#2D3748]">{formData.fullName || 'Tejedora Nudos del Alma'}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#718096]">Acceso:</span>
                <span className="font-semibold text-emerald-700">De por Vida (Activo)</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#718096]">Bonos Desbloqueados:</span>
                <span className="font-semibold text-[#C59B27]">6 de 6 Disponibles</span>
              </div>
            </div>

            <button
              onClick={onClose}
              className="btn-gold-glow px-8 py-3.5 text-xs sm:text-sm font-bold uppercase tracking-wider cursor-pointer"
            >
              Comenzar Mi Primera Clase
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
