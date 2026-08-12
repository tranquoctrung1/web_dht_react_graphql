import { useMantineTheme } from '@mantine/core';

import { XNTD_DARK_THEME } from '../utils/dataTableTheme';

// Returns the react-data-table-component theme name matching the app's current
// Mantine color scheme. Pass the result to <DataTable theme={...} />.
// 'default' is RDT's built-in light theme; XNTD_DARK_THEME is registered in
// utils/dataTableTheme.ts (imported at app bootstrap).
export const useTableTheme = (): string => {
    const theme = useMantineTheme();
    return theme.colorScheme === 'dark' ? XNTD_DARK_THEME : 'default';
};
