export async function POST() {
    return Response.json(
        {
          msg: "Não foi feito upload do arquivo CSV",
        },
        { status: 420 }
      );
}