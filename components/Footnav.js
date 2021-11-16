import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { makeStyles } from '@mui/material';

export default function Footnav() {

  const [value, setValue] = React.useState(0);

  return (
    <Box sx={{ width: 500 }}>
      <BottomNavigation
       style={{position: 'absolute', right: 0, left: 0 }}
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        
      >
        <BottomNavigationAction label="Global" icon={<RestoreIcon />} />
        <BottomNavigationAction label="Country Stats" icon={<FavoriteIcon />} />
        <BottomNavigationAction label="Graph" icon={<LocationOnIcon />} />
      </BottomNavigation>
    </Box>
  );
}
