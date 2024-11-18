import * as React from 'react';
import Box from '@mui/material/Box';
import { PieChart } from '@mui/x-charts/PieChart';
import { mobileAndDesktopOS, valueFormatter } from './webUsageStats';

export default function PieAnimation() {
  const [radius, setRadius] = React.useState(50);
  const [itemNb, setItemNb] = React.useState(5);

  return (
    <Box sx={{ width: '100%' }}>
      <PieChart
        height={300}
        series={[
          {
            data: mobileAndDesktopOS.slice(0, itemNb),
            innerRadius: radius,
            arcLabel: (params) => params.label ?? '',
            arcLabelMinAngle: 20,
            valueFormatter,
          },
        ]}
      />
    </Box>
  );
}