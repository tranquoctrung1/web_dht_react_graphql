import { createTheme } from 'react-data-table-component';

// Registers a react-data-table-component theme whose colors match the app's
// Mantine 6 dark palette. This runs once as a module-level side effect, so the
// file must be imported near app bootstrap (see main.tsx) before any DataTable
// mounts. The third arg ('dark') is the base theme, so any key we omit falls
// back to sane dark-mode values rather than the light default.
//
// Mantine 6 dark surface colors referenced below:
//   dark[7] #1A1B1E  deepest background
//   dark[6] #25262B  raised surface / striped rows
//   dark[4] #2C2E33  hover / divider
//   text    #C1C2C5  primary text
export const XNTD_DARK_THEME = 'xntd-dark';

createTheme(
    XNTD_DARK_THEME,
    {
        text: {
            primary: '#C1C2C5',
            secondary: '#909296',
            disabled: 'rgba(193, 194, 197, 0.4)',
        },
        background: {
            default: '#1A1B1E',
        },
        context: {
            background: '#25262B',
            text: '#C1C2C5',
        },
        divider: {
            default: '#2C2E33',
        },
        button: {
            default: '#C1C2C5',
            focus: 'rgba(255, 255, 255, 0.12)',
            hover: 'rgba(255, 255, 255, 0.08)',
            disabled: 'rgba(255, 255, 255, 0.3)',
        },
        striped: {
            default: '#25262B',
            text: '#C1C2C5',
        },
        highlightOnHover: {
            default: '#2C2E33',
            text: '#C1C2C5',
        },
        selected: {
            default: '#2C2E33',
            text: '#C1C2C5',
        },
        sortFocus: {
            default: '#C1C2C5',
        },
    },
    'dark',
);
