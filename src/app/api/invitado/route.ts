import { supabase } from "@/lib/supabase";

export async function POST(request: Request) {
  const formData = await request.formData();

  const nombre = formData.get("nombre")?.toString().trim();

  if (!nombre) {
    return Response.json(
      { ok: false, message: "El nombre es obligatorio." },
      { status: 400 }
    );
  }

  const { error } = await supabase
    .from("compras_invitado")
    .insert([{ nombre }]);

  if (error) {
    return Response.json(
      { ok: false, message: "Error al guardar invitado en Supabase." },
      { status: 500 }
    );
  }

  return Response.json({
    ok: true,
    message: "Invitado guardado correctamente.",
  });
}