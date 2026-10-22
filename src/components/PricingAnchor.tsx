import React, { useState } from 'react';
import {
  Check,
  Sparkles,
  Lock,
  CreditCard,
  Award,
  Flame,
  User,
  Mail,
  Phone,
  CheckCircle2,
  ArrowRight,
  MessageCircle,
  Loader2,
  BookmarkCheck
} from 'lucide-react';

interface CustomerLead {
  fullName: string;
  email: string;
  whatsapp: string;
  interest: string;
  registeredAt?: string;
}

interface PricingAnchorProps {
  onOpenCheckout: (leadData?: { fullName?: string; email?: string; whatsapp?: string }) => void;
}

export const PricingAnchor: React.FC<PricingAnchorProps> = ({ onOpenCheckout }) => {
  const [formData, setFormData] = useState<CustomerLead>({
    fullName: '',
    email: '',
    whatsapp: '',
    interest: 'Bolsos de Macramé (Santorini, Bahía, Tula)'
  });

  const [errors, setErrors] = useState<Partial<Record<keyof CustomerLead, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'warning'>('idle');
  const [submitMessage, setSubmitMessage] = useState<string | null>(null);

  const officialPhone = '3189766697';
  const formattedPhone = '+57 318 976 6697';
  const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xzednoek';

  const validate = () => {
    const newErrors: Partial<Record<keyof CustomerLead, string>> = {};
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Por favor ingresa tu nombre completo.';
    } else if (formData.fullName.trim().length < 3) {
      newErrors.fullName = 'Ingresa un nombre válido (al menos 3 caracteres).';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Por favor ingresa tu correo electrónico.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Ingresa un correo electrónico válido.';
    }

    if (!formData.whatsapp.trim()) {
      newErrors.whatsapp = 'Por favor ingresa tu número de WhatsApp o teléfono.';
    } else if (formData.whatsapp.replace(/\D/g, '').length < 7) {
      newErrors.whatsapp = 'Ingresa un número telefónico válido (mínimo 7 dígitos).';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setSubmitMessage(null);

    const leadPayload = {
      name: formData.fullName.trim(),
      email: formData.email.trim(),
      phone: formData.whatsapp.trim(),
      whatsapp: formData.whatsapp.trim(),
      interest: formData.interest,
      course: 'Escuela de Macramé Consciente - Nudos del Alma',
      promoPrice: '$47 USD (71% Descuento)',
      _subject: `Nueva Inscripción: ${formData.fullName.trim()} - Nudos del Alma`,
      submittedAt: new Date().toISOString()
    };

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(leadPayload)
      });

      // Save lead safely in localStorage for local persistence
      try {
        const leadWithTimestamp = {
          ...formData,
          registeredAt: new Date().toISOString()
        };
        const existingLeads = JSON.parse(localStorage.getItem('macrame_contact_leads') || '[]');
        existingLeads.push(leadWithTimestamp);
        localStorage.setItem('macrame_contact_leads', JSON.stringify(existingLeads));
      } catch (err) {
        console.error('Error saving lead to localStorage', err);
      }

      if (response.ok) {
        setSubmitStatus('success');
        setSubmitMessage('Tus datos han sido registrados con éxito en Formspree y tu cupo promocional de $47 USD está reservado.');
      } else {
        const result = await response.json().catch(() => ({}));
        console.warn('Formspree returned non-200:', result);
        setSubmitStatus('warning');
        setSubmitMessage('Tus datos fueron guardados correctamente. Puedes continuar con el pago o escribirnos por WhatsApp.');
      }
      setIsSubmitted(true);
    } catch (err) {
      console.error('Error submitting to Formspree:', err);
      // Fallback: local storage backup
      try {
        const leadWithTimestamp = {
          ...formData,
          registeredAt: new Date().toISOString()
        };
        const existingLeads = JSON.parse(localStorage.getItem('macrame_contact_leads') || '[]');
        existingLeads.push(leadWithTimestamp);
        localStorage.setItem('macrame_contact_leads', JSON.stringify(existingLeads));
      } catch (storageErr) {
        console.error('Storage error', storageErr);
      }
      setSubmitStatus('warning');
      setSubmitMessage('Tus datos fueron guardados. Puedes completar tu pago o confirmarlo directamente vía WhatsApp.');
      setIsSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleProceedToPayment = () => {
    onOpenCheckout({
      fullName: formData.fullName,
      email: formData.email,
      whatsapp: formData.whatsapp
    });
  };

  const whatsappInquiryUrl = `https://wa.me/573189766697?text=${encodeURIComponent(
    `¡Hola! Acabo de registrar mi inscripción en la Escuela de Macramé Nudos del Alma.\n\n👤 Nombre: ${formData.fullName}\n📧 Correo: ${formData.email}\n📱 Teléfono: ${formData.whatsapp}\n✨ Proyecto de interés: ${formData.interest}\n\nDeseo confirmar mi cupo promocional de $47 USD.`
  )}`;

  return (
    <section id="precio" className="py-16 md:py-24 bg-[#F9F6F0] relative overflow-hidden">
      {/* Background glow circle */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#4A5D4E]/8 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1140px] mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#4A5D4E]/10 border border-[#4A5D4E]/20 text-[#4A5D4E] text-xs font-bold uppercase tracking-wider mb-3">
            <Flame className="w-3.5 h-3.5 text-[#C59B27]" />
            <span>Zona de Inscripción Oficial</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#4A5D4E] tracking-tight font-heading mb-3">
            Todo Lo Que Necesitas Para Tejer Con Alma y Emprender con Éxito
          </h2>
          <p className="text-base text-[#4A5568] font-body">
            Completa tus datos en el formulario de inscripción para asegurar tu cupo promocional de <strong>$47 USD</strong> con acceso vitalicio y los 6 bonos incluidos.
          </p>
        </div>

        {/* Main Content Box: 2-Column Split Layout on Desktop */}
        <div className="bg-[#4A5D4E] text-white rounded-3xl p-6 sm:p-8 md:p-10 shadow-2xl border-2 border-[#C59B27]/40 relative overflow-hidden">
          {/* Top Banner Tag */}
          <div className="absolute top-0 right-0 bg-gradient-to-l from-[#C59B27] to-[#B8860B] text-white text-[11px] sm:text-xs font-bold px-6 py-2 rounded-bl-2xl uppercase tracking-wider shadow-md">
            OFERTA DE LANZAMIENTO · COHORTE 2026
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start pt-4">
            {/* Left Column: What's Included & Value Stack (7 columns) */}
            <div className="lg:col-span-7 flex flex-col justify-between">
              <div>
                <div className="mb-6">
                  <span className="text-xs uppercase tracking-[0.2em] text-emerald-200 block mb-1 font-semibold">
                    Membresía Vitalicia Todo Incluido
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold font-heading text-white">
                    Escuela de Macramé: Nudos del Alma
                  </h3>
                  <p className="text-xs sm:text-sm text-emerald-100 mt-1">
                    Acceso instantáneo a la plataforma de aprendizaje, patrones, proyectos y comunidad internacional.
                  </p>
                </div>

                {/* Pricing Comparison Box */}
                <div className="bg-[#3D4D40] rounded-2xl p-5 sm:p-6 mb-6 border border-white/10 text-center">
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 mb-2">
                    <div className="text-emerald-200/80 text-sm line-through">
                      Precio Regular: <span className="font-semibold text-white/70">$164 USD</span>
                    </div>
                    <div className="text-xs bg-[#C59B27]/25 border border-[#C59B27]/50 text-amber-200 px-3 py-1 rounded-full font-bold">
                      AHORRAS $117 USD HOY (71% OFF)
                    </div>
                  </div>

                  <div className="flex items-baseline justify-center gap-2 mb-1">
                    <span className="text-2xl sm:text-3xl font-semibold text-amber-200 font-heading">$</span>
                    <span className="text-5xl sm:text-6xl font-extrabold text-white tracking-tight font-heading">
                      47
                    </span>
                    <span className="text-lg font-medium text-emerald-200">USD</span>
                  </div>

                  <span className="inline-block text-xs text-emerald-100 font-medium tracking-wide">
                    Pago Único · Acceso De Por Vida · Sin Mensualidades Ni Cobros Extra
                  </span>
                </div>

                {/* Checklist of Deliverables */}
                <div className="space-y-2.5 mb-8 text-xs sm:text-sm text-emerald-50">
                  <div className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-amber-300 shrink-0 mt-0.5" />
                    <span>Programa Completo Nudos del Alma (Fundamentos a Pro)</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-amber-300 shrink-0 mt-0.5" />
                    <span>Catálogo Completo de Patrones (Bolsos, Tapices & Navidad)</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-amber-300 shrink-0 mt-0.5" />
                    <span>Bono #1: Directorio VIP de Proveedores Internacionales ($37 USD)</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-amber-300 shrink-0 mt-0.5" />
                    <span>Bono #2: Ebook Maestra de Fibras y Cordones ($27 USD)</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-amber-300 shrink-0 mt-0.5" />
                    <span>Bono #3: Masterclass Cálculo de Metraje sin Desperdicio ($35 USD)</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-amber-300 shrink-0 mt-0.5" />
                    <span>Bono #4: Comunidad VIP Círculo Nudos del Alma ($49 USD)</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-amber-300 shrink-0 mt-0.5" />
                    <span>Bono #5: Calculadora Automática de Costos y Precios ($29 USD)</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-amber-300 shrink-0 mt-0.5" />
                    <span>Bono #6: Bitácora Emocional & Diario de Tejedora Consciente ($24 USD)</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-amber-300 shrink-0 mt-0.5" />
                    <span>Certificado Digital Oficial de Finalización</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-amber-300 shrink-0 mt-0.5" />
                    <span>Garantía Incondicional de Devolución por 7 Días</span>
                  </div>
                </div>

                {/* Escudo Oficial de Garantía 7 Días Artesanal */}
                <div className="mb-6 p-4 rounded-2xl bg-[#2D3E31]/75 border border-[#C59B27]/40 flex flex-col sm:flex-row items-center gap-4 shadow-lg backdrop-blur-xs">
                  <div className="w-20 h-20 sm:w-22 sm:h-22 rounded-full overflow-hidden border-2 border-[#C59B27] shrink-0 shadow-md bg-[#FAF7F2]">
                    <img
                      src="/assets/aistudio/screen_7d257477.png"
                      alt="Escudo Oficial de Garantía 7 Días 100% Satisfacción Nudos del Alma"
                      className="w-full h-full object-cover scale-105"
                      loading="lazy"
                    />
                  </div>
                  <div className="text-center sm:text-left">
                    <span className="inline-block text-[11px] font-bold uppercase tracking-wider text-[#F5D580] mb-0.5">
                      Garantía Total de Satisfacción (7 Días)
                    </span>
                    <p className="text-xs text-emerald-100 leading-relaxed">
                      Prueba todo el curso sin riesgo. Si en 7 días sientes que no supera tus expectativas, te devolvemos el 100% de tu dinero de inmediato.
                    </p>
                  </div>
                </div>
              </div>

              {/* Security & Guarantee Trust Seals */}
              <div className="pt-4 border-t border-white/15 grid grid-cols-2 sm:grid-cols-4 gap-3 text-[11px] text-emerald-100">
                <div className="flex items-center gap-1.5">
                  <Lock className="w-3.5 h-3.5 text-amber-300 shrink-0" />
                  <span>Pago Seguro SSL</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <img
                    src="/assets/aistudio/screen_7d257477.png"
                    alt="Garantía 7 Días"
                    className="w-4 h-4 rounded-full object-cover shrink-0 border border-[#C59B27]/60"
                  />
                  <span>7 Días Garantía</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CreditCard className="w-3.5 h-3.5 text-amber-300 shrink-0" />
                  <span>Tarjetas & PayPal</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Award className="w-3.5 h-3.5 text-amber-300 shrink-0" />
                  <span>Acceso Instantáneo</span>
                </div>
              </div>
            </div>

            {/* Right Column: Contact & Registration Form (5 columns) */}
            <div className="lg:col-span-5">
              <div className="bg-[#FAF7F2] text-[#2D3748] rounded-2xl p-5 sm:p-7 shadow-2xl border-2 border-[#C59B27]/40">
                {!isSubmitted ? (
                  <form
                    action={FORMSPREE_ENDPOINT}
                    method="POST"
                    onSubmit={handleSubmit}
                    noValidate
                  >
                    {/* Formspree Configuration Fields */}
                    <input type="hidden" name="_subject" value={`Nueva Inscripción Macramé: ${formData.fullName || 'Alumna'} - Nudos del Alma`} />
                    <input type="hidden" name="curso" value="Escuela de Macramé Consciente - Nudos del Alma" />
                    <input type="hidden" name="precio_promocion" value="$47 USD (71% Descuento)" />

                    {/* Form Header */}
                    <div className="mb-5 pb-4 border-b border-[#4A5D4E]/12">
                      <div className="inline-flex items-center gap-1 text-[11px] font-bold uppercase tracking-wider text-[#C59B27] mb-1">
                        <Sparkles className="w-3 h-3" />
                        <span>Formulario de Inscripción Oficial</span>
                      </div>
                      <h4 className="text-xl font-bold text-[#4A5D4E] font-heading">
                        Aparta Tu Cupo Oficial
                      </h4>
                      <p className="text-xs text-[#718096] mt-0.5">
                        Ingresa tus datos para registrar tu matrícula con el 71% de descuento ($47 USD).
                      </p>
                    </div>

                    {/* Field 1: Nombre de la cliente */}
                    <div className="mb-4 text-left">
                      <label htmlFor="lead-name" className="block text-xs font-bold text-[#2D3748] mb-1">
                        Nombre Completo de la Alumna <span className="text-rose-600">*</span>
                      </label>
                      <div className="relative">
                        <User className="w-4 h-4 text-[#718096] absolute left-3 top-1/2 -translate-y-1/2" />
                        <input
                          id="lead-name"
                          name="name"
                          type="text"
                          required
                          value={formData.fullName}
                          onChange={(e) => {
                            setFormData({ ...formData, fullName: e.target.value });
                            if (errors.fullName) setErrors({ ...errors, fullName: undefined });
                          }}
                          placeholder="Ej. Carolina Ramírez"
                          className={`w-full pl-9 pr-3 py-2.5 text-xs sm:text-sm bg-white rounded-xl border focus:outline-hidden transition-all ${
                            errors.fullName
                              ? 'border-rose-400 focus:border-rose-500 ring-1 ring-rose-300'
                              : 'border-[#4A5D4E]/20 focus:border-[#4A5D4E] focus:ring-1 focus:ring-[#4A5D4E]'
                          }`}
                        />
                      </div>
                      {errors.fullName && (
                        <p className="text-[11px] text-rose-600 font-medium mt-1">{errors.fullName}</p>
                      )}
                    </div>

                    {/* Field 2: Correo Electrónico */}
                    <div className="mb-4 text-left">
                      <label htmlFor="lead-email" className="block text-xs font-bold text-[#2D3748] mb-1">
                        Correo Electrónico <span className="text-rose-600">*</span>
                      </label>
                      <div className="relative">
                        <Mail className="w-4 h-4 text-[#718096] absolute left-3 top-1/2 -translate-y-1/2" />
                        <input
                          id="lead-email"
                          name="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => {
                            setFormData({ ...formData, email: e.target.value });
                            if (errors.email) setErrors({ ...errors, email: undefined });
                          }}
                          placeholder="carolina@ejemplo.com"
                          className={`w-full pl-9 pr-3 py-2.5 text-xs sm:text-sm bg-white rounded-xl border focus:outline-hidden transition-all ${
                            errors.email
                              ? 'border-rose-400 focus:border-rose-500 ring-1 ring-rose-300'
                              : 'border-[#4A5D4E]/20 focus:border-[#4A5D4E] focus:ring-1 focus:ring-[#4A5D4E]'
                          }`}
                        />
                      </div>
                      <p className="text-[10px] text-[#718096] mt-1">
                        Aquí recibirás las claves y enlaces directos al portal de alumnas.
                      </p>
                      {errors.email && (
                        <p className="text-[11px] text-rose-600 font-medium mt-1">{errors.email}</p>
                      )}
                    </div>

                    {/* Field 3: Teléfono / WhatsApp de la cliente */}
                    <div className="mb-4 text-left">
                      <label htmlFor="lead-phone" className="block text-xs font-bold text-[#2D3748] mb-1">
                        Teléfono / WhatsApp de Contacto <span className="text-rose-600">*</span>
                      </label>
                      <div className="relative">
                        <Phone className="w-4 h-4 text-[#718096] absolute left-3 top-1/2 -translate-y-1/2" />
                        <input
                          id="lead-phone"
                          name="phone"
                          type="tel"
                          required
                          value={formData.whatsapp}
                          onChange={(e) => {
                            setFormData({ ...formData, whatsapp: e.target.value });
                            if (errors.whatsapp) setErrors({ ...errors, whatsapp: undefined });
                          }}
                          placeholder="Ej. 318 976 6697"
                          className={`w-full pl-9 pr-3 py-2.5 text-xs sm:text-sm bg-white rounded-xl border focus:outline-hidden transition-all ${
                            errors.whatsapp
                              ? 'border-rose-400 focus:border-rose-500 ring-1 ring-rose-300'
                              : 'border-[#4A5D4E]/20 focus:border-[#4A5D4E] focus:ring-1 focus:ring-[#4A5D4E]'
                          }`}
                        />
                      </div>
                      <p className="text-[10px] text-[#718096] mt-1">
                        Para enviarte recordatorios, bienvenida y asistencia directa.
                      </p>
                      {errors.whatsapp && (
                        <p className="text-[11px] text-rose-600 font-medium mt-1">{errors.whatsapp}</p>
                      )}
                    </div>

                    {/* Field 4: Proyecto de mayor interés */}
                    <div className="mb-5 text-left">
                      <label htmlFor="lead-interest" className="block text-xs font-bold text-[#2D3748] mb-1">
                        ¿Qué te gustaría aprender a tejer primero?
                      </label>
                      <div className="relative">
                        <BookmarkCheck className="w-4 h-4 text-[#718096] absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                        <select
                          id="lead-interest"
                          name="interest"
                          value={formData.interest}
                          onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                          className="w-full pl-9 pr-3 py-2.5 text-xs sm:text-sm bg-white rounded-xl border border-[#4A5D4E]/20 focus:border-[#4A5D4E] focus:outline-hidden focus:ring-1 focus:ring-[#4A5D4E] transition-all cursor-pointer text-[#2D3748]"
                        >
                          <option value="Bolsos de Macramé (Santorini, Bahía, Tula)">
                            Bolsos & Moda (Santorini, Bahía, Tula Verona)
                          </option>
                          <option value="Tapiz Hojas & Mural de los Chakras">
                            Tapices & Murales (Hojas Botánicas, Chakras)
                          </option>
                          <option value="Colección Navideña (Árbol Mural Luminoso)">
                            Colección Navideña (Árbol Mural Luminoso)
                          </option>
                          <option value="Terapia & Reducción de Estrés">
                            Terapia & Bienestar (Aprender desde Cero)
                          </option>
                          <option value="Emprender y Vender Artesanías">
                            Emprender mi Negocio y Vender
                          </option>
                        </select>
                      </div>
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="btn-gold-glow w-full py-4 px-4 text-xs sm:text-sm md:text-base font-bold tracking-wider uppercase cursor-pointer rounded-xl shadow-lg flex items-center justify-center gap-2"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          <span>Enviando inscripción a Formspree...</span>
                        </>
                      ) : (
                        <>
                          <span>INSCRIBIRME Y ASEGURAR MI CUPO ($47 USD)</span>
                          <ArrowRight className="w-4 h-4" />
                        </>
                      )}
                    </button>

                    <div className="mt-3.5 pt-3 border-t border-[#4A5D4E]/10 text-center">
                      <p className="text-[11px] text-[#718096] flex items-center justify-center gap-1.5">
                        <Lock className="w-3 h-3 text-[#4A5D4E]" />
                        <span>Envío seguro cifrado SSL · Soporte: <strong>{formattedPhone}</strong></span>
                      </p>
                    </div>
                  </form>
                ) : (
                  /* Success Confirmation State */
                  <div className="text-center py-2 animate-fade-in">
                    <div className="w-14 h-14 bg-emerald-100 rounded-full flex items-center justify-center text-[#4A5D4E] mx-auto mb-3 shadow-inner">
                      <CheckCircle2 className="w-8 h-8 text-emerald-600" />
                    </div>

                    <span className="text-xs font-bold uppercase tracking-wider text-[#C59B27] block mb-1">
                      ¡Inscripción Registrada!
                    </span>
                    <h4 className="text-xl font-bold text-[#4A5D4E] font-heading mb-2">
                      ¡Bienvenida, {formData.fullName.split(' ')[0]}!
                    </h4>
                    <p className="text-xs text-[#4A5568] leading-relaxed mb-4">
                      {submitMessage || 'Tus datos han sido registrados con éxito y tu tarifa promocional de $47 USD está reservada.'}
                    </p>

                    {/* Lead Summary Box */}
                    <div className="bg-white rounded-xl p-3.5 border border-[#4A5D4E]/15 text-left text-xs space-y-1.5 mb-5 shadow-xs">
                      <div className="flex justify-between items-center text-[#718096]">
                        <span>Alumna:</span>
                        <strong className="text-[#2D3748] font-semibold">{formData.fullName}</strong>
                      </div>
                      <div className="flex justify-between items-center text-[#718096]">
                        <span>Correo:</span>
                        <strong className="text-[#2D3748] font-semibold">{formData.email}</strong>
                      </div>
                      <div className="flex justify-between items-center text-[#718096]">
                        <span>Teléfono:</span>
                        <strong className="text-[#2D3748] font-semibold">{formData.whatsapp}</strong>
                      </div>
                      <div className="flex justify-between items-center text-[#718096]">
                        <span>Proyecto:</span>
                        <strong className="text-[#4A5D4E] font-semibold truncate max-w-[180px]">{formData.interest}</strong>
                      </div>
                    </div>

                    {/* Action 1: Proceed to Secure Payment */}
                    <button
                      onClick={handleProceedToPayment}
                      className="btn-gold-glow w-full py-3.5 px-4 text-xs sm:text-sm font-bold uppercase tracking-wider cursor-pointer rounded-xl shadow-md mb-2.5 flex items-center justify-center gap-2"
                    >
                      <CreditCard className="w-4 h-4" />
                      <span>Completar Pago Seguro ($47 USD)</span>
                    </button>

                    {/* Action 2: WhatsApp confirmation */}
                    <a
                      href={whatsappInquiryUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-2.5 px-3 bg-[#25D366] hover:bg-[#20ba59] text-white rounded-xl font-bold text-xs uppercase tracking-wider transition-colors shadow-xs flex items-center justify-center gap-2 mb-3"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Confirmar por WhatsApp ({officialPhone})</span>
                    </a>

                    <button
                      type="button"
                      onClick={() => setIsSubmitted(false)}
                      className="text-[11px] text-[#718096] hover:text-[#4A5D4E] underline cursor-pointer"
                    >
                      ¿Necesitas corregir algún dato? Haz clic aquí
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
