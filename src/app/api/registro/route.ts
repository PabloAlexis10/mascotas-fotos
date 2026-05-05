import { supabase } from "@/lib/supabase";

export async function POST(request: Request) {
  const formData = await request.formData();

  const nombre = formData.get("nombre")?.toString().trim();
  const email = formData.get("email")?.toString().trim();

  if (!nombre || !email) {
    return Response.json(
      { ok: false, message: "Nombre y correo son obligatorios." },
      { status: 400 }
    );
  }

const { error } = await supabase
  .from("registros")
  .insert([{ nombre, email }]);

  if (error) {
    return Response.json(
      { ok: false, message: "Error al guardar en Supabase." },
      { status: 500 }
    );
  }

  return Response.json({
    ok: true,
    message: "Registro guardado correctamente en Supabase.",
  });
}