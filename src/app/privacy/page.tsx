

import React from "react";

export const metadata = {
  title: "Políticas de Privacidad — Neonix",
  description: "Conoce cómo Neonix protege y maneja tu información personal. Transparencia total sobre nuestras prácticas de privacidad.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
    
      <section className="bg-muted/50 border-b border-border">
        <div className="mx-auto max-w-4xl px-6 py-12">
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Políticas de Privacidad
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            En Neonix respetamos tu privacidad. Aquí te explicamos cómo manejamos tu información personal.
          </p>
          <p className="mt-2 text-sm text-muted-foreground">
            Última actualización: Septiembre 2025
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-12">
        <div className="space-y-8">

          <div className="rounded-lg bg-card border p-6">
            <h2 className="text-xl font-semibold mb-4">
              1. Información que recopilamos
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <div>
                <h3 className="font-medium text-foreground mb-2">Información personal</h3>
                <p className="text-sm">
                  Cuando interactúas con nuestro sitio web, podemos recopilar información como:
                  nombre, dirección de correo electrónico, dirección postal, número de teléfono
                  y preferencias de productos.
                </p>
              </div>
              <div>
                <h3 className="font-medium text-foreground mb-2">Información técnica</h3>
                <p className="text-sm">
                  Recopilamos datos sobre tu dispositivo, navegador, dirección IP,
                  páginas visitadas y tiempo de permanencia para mejorar tu experiencia.
                </p>
              </div>
              <div>
                <h3 className="font-medium text-foreground mb-2">Cookies y tecnologías similares</h3>
                <p className="text-sm">
                  Utilizamos cookies para personalizar contenido, analizar tráfico
                  y recordar tus preferencias durante futuras visitas.
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-lg bg-card border p-6">
            <h2 className="text-xl font-semibold mb-4">
              2. Cómo usamos tu información
            </h2>
            <div className="space-y-3 text-muted-foreground">
              <div className="flex items-start gap-3">
                <span className="mt-1 inline-block h-2 w-2 rounded-full bg-violet-500" />
                <span className="text-sm">Procesar y gestionar pedidos y entregas</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="mt-1 inline-block h-2 w-2 rounded-full bg-violet-500" />
                <span className="text-sm">Comunicarnos contigo sobre productos y servicios</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="mt-1 inline-block h-2 w-2 rounded-full bg-violet-500" />
                <span className="text-sm">Personalizar tu experiencia de navegación</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="mt-1 inline-block h-2 w-2 rounded-full bg-violet-500" />
                <span className="text-sm">Mejorar nuestros productos y servicios</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="mt-1 inline-block h-2 w-2 rounded-full bg-violet-500" />
                <span className="text-sm">Enviar newsletters y promociones (solo si lo autorizas)</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="mt-1 inline-block h-2 w-2 rounded-full bg-violet-500" />
                <span className="text-sm">Cumplir con obligaciones legales</span>
              </div>
            </div>
          </div>

          <div className="rounded-lg bg-card border p-6">
            <h2 className="text-xl font-semibold mb-4">
              3. Compartir tu información
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p className="text-sm">
                <strong className="text-foreground">No vendemos ni alquilamos</strong> tu información personal
                a terceros. Solo compartimos información en estas situaciones:
              </p>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <span className="mt-1 inline-block h-2 w-2 rounded-full bg-violet-500" />
                  <span className="text-sm">
                    <strong className="text-foreground">Proveedores de servicios:</strong> Empresas que nos ayudan
                    con envíos, pagos y análisis web
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="mt-1 inline-block h-2 w-2 rounded-full bg-violet-500" />
                  <span className="text-sm">
                    <strong className="text-foreground">Obligaciones legales:</strong> Cuando sea requerido
                    por ley o autoridades competentes
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="mt-1 inline-block h-2 w-2 rounded-full bg-violet-500" />
                  <span className="text-sm">
                    <strong className="text-foreground">Con tu consentimiento:</strong> En cualquier otra
                    situación previamente autorizada por ti
                  </span>
                </div>
              </div>
            </div>
          </div>

   
          <div className="rounded-lg bg-card border p-6">
            <h2 className="text-xl font-semibold mb-4">
              4. Seguridad de la información
            </h2>
            <div className="text-muted-foreground space-y-4">
              <p className="text-sm">
                Implementamos medidas técnicas y organizacionales apropiadas para proteger
                tu información personal contra acceso no autorizado, alteración, divulgación o destrucción.
              </p>
              <div className="grid gap-3 sm:grid-cols-2">
                <div className="p-3 rounded-md bg-muted/50">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="h-2 w-2 rounded-full bg-green-500"></div>
                    <span className="text-sm font-medium text-foreground">Encriptación SSL</span>
                  </div>
                  <p className="text-xs text-muted-foreground">Todas las conexiones están protegidas</p>
                </div>
                <div className="p-3 rounded-md bg-muted/50">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="h-2 w-2 rounded-full bg-green-500"></div>
                    <span className="text-sm font-medium text-foreground">Acceso limitado</span>
                  </div>
                  <p className="text-xs text-muted-foreground">Solo personal autorizado accede a tus datos</p>
                </div>
              </div>
            </div>
          </div>

   
          <div className="rounded-lg bg-card border p-6">
            <h2 className="text-xl font-semibold mb-4">
              5. Tus derechos
            </h2>
            <div className="text-muted-foreground space-y-4">
              <p className="text-sm">
                Tienes derecho a controlar cómo manejamos tu información personal:
              </p>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <span className="mt-1 inline-block h-2 w-2 rounded-full bg-violet-500" />
                  <span className="text-sm">
                    <strong className="text-foreground">Acceso:</strong> Solicitar una copia de la información
                    que tenemos sobre ti
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="mt-1 inline-block h-2 w-2 rounded-full bg-violet-500" />
                  <span className="text-sm">
                    <strong className="text-foreground">Rectificación:</strong> Corregir información incorrecta
                    o incompleta
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="mt-1 inline-block h-2 w-2 rounded-full bg-violet-500" />
                  <span className="text-sm">
                    <strong className="text-foreground">Eliminación:</strong> Solicitar que eliminemos
                    tu información personal
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="mt-1 inline-block h-2 w-2 rounded-full bg-violet-500" />
                  <span className="text-sm">
                    <strong className="text-foreground">Oposición:</strong> Oponerte al procesamiento
                    de tu información para fines específicos
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-lg bg-card border p-6">
            <h2 className="text-xl font-semibold mb-4">
              6. Cookies y seguimiento
            </h2>
            <div className="text-muted-foreground space-y-4">
              <p className="text-sm">
                Utilizamos diferentes tipos de cookies para mejorar tu experiencia:
              </p>
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <h3 className="font-medium text-foreground mb-2">Cookies esenciales</h3>
                  <p className="text-xs text-muted-foreground">
                    Necesarias para el funcionamiento básico del sitio.
                    No se pueden desactivar.
                  </p>
                </div>
                <div>
                  <h3 className="font-medium text-foreground mb-2">Cookies de análisis</h3>
                  <p className="text-xs text-muted-foreground">
                    Nos ayudan a entender cómo interactúas con nuestro sitio.
                    Puedes desactivarlas.
                  </p>
                </div>
                <div>
                  <h3 className="font-medium text-foreground mb-2">Cookies de marketing</h3>
                  <p className="text-xs text-muted-foreground">
                    Utilizadas para mostrarte contenido relevante.
                    Requieren tu consentimiento.
                  </p>
                </div>
                <div>
                  <h3 className="font-medium text-foreground mb-2">Cookies funcionales</h3>
                  <p className="text-xs text-muted-foreground">
                    Recuerdan tus preferencias y mejoran tu experiencia.
                    Opcionales.
                  </p>
                </div>
              </div>
            </div>
          </div>

        
          <div className="rounded-lg bg-card border p-6">
            <h2 className="text-xl font-semibold mb-4">
              7. Retención de datos
            </h2>
            <div className="text-muted-foreground">
              <p className="text-sm mb-4">
                Conservamos tu información personal solo durante el tiempo necesario
                para los fines descritos en esta política:
              </p>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <span className="mt-1 inline-block h-2 w-2 rounded-full bg-violet-500" />
                  <span className="text-sm">
                    <strong className="text-foreground">Datos de cuenta:</strong> Mientras mantengas una cuenta activa
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="mt-1 inline-block h-2 w-2 rounded-full bg-violet-500" />
                  <span className="text-sm">
                    <strong className="text-foreground">Historial de pedidos:</strong> 5 años después de la última transacción
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="mt-1 inline-block h-2 w-2 rounded-full bg-violet-500" />
                  <span className="text-sm">
                    <strong className="text-foreground">Datos de marketing:</strong> Hasta que retires tu consentimiento
                  </span>
                </div>
              </div>
            </div>
          </div>

         <div className="rounded-lg bg-card border p-4 m-2">
  
            <h2 className="text-xl font-semibold mb-4">
              8. Contacto y consultas
            </h2>
            <div className="">
              <p className="">
                Si tienes preguntas sobre esta política de privacidad o quieres ejercer
                tus derechos, puedes contactarnos:
              </p>
              <div className=" ">
                <p><strong className="">Email:</strong> privacy@neonix.com</p>
                <p><strong className="">Tiempo de respuesta:</strong> Máximo 30 días hábiles</p>
                <p><strong className="">Responsable:</strong> Equipo de Privacidad Neonix</p>
              </div>
            </div>
          </div>

          <div className="text-center py-8 border-t border-border">
            <h3 className="text-lg font-semibold mb-3">
              Cambios a esta política
            </h3>
            <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
              Nos reservamos el derecho de actualizar esta política de privacidad.
              Te notificaremos sobre cambios significativos por email o mediante
              un aviso prominente en nuestro sitio web.
            </p>
          </div>

        </div>
      </section>
    </main>
  );
}

