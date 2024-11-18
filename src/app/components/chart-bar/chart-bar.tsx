import * as React from "react";
import { BarChart } from "@mui/x-charts/BarChart";
import { axisClasses } from "@mui/x-charts/ChartsAxis";

export default function ChartBar() {
  const colors: string[] = ["#02B2AF", "#72CCFF", "#F0B90B"];
  return (
    <BarChart
      sx={(theme) => ({
        [`.${axisClasses.root}`]: {
          [`.${axisClasses.tick}, .${axisClasses.line}`]: {
            stroke: "#fff",
            strokeWidth: 3,
          },
          [`.${axisClasses.tickLabel}`]: {
            fill: "#fff",
          },
        },
      })}
      series={[
        { data: [51, 6, 49, 30], label: "Compras", id: "comprasId" },
        { data: [15, 25, 30, 50], label: "Taxas", id: "taxasId" },
        { data: [60, 50, 15, 25], label: "Vendas", id: "vendasId" },
      ]}
      slotProps={{
        // Custom loading message
        loadingOverlay: { message: "Buscando os dados necessarios." },
        // Custom message for empty chart
        noDataOverlay: { message: "Não há dados para mostrar." },
      }}
      xAxis={[{ data: ["Abril", "Março", "maio", "Juno"], scaleType: "band" }]}
      margin={{ top: 60, bottom: 20, left: 40, right: 0 }}
      colors={colors}
    />
  );
}
