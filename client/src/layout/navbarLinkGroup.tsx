import {
    Box,
    Collapse,
    createStyles,
    Group,
    Text,
    ThemeIcon,
    UnstyledButton,
} from '@mantine/core';
import {
    IconCalendarStats,
    IconChevronLeft,
    IconChevronRight,
    //@ts-ignore
    TablerIcon,
} from '@tabler/icons-react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { toggle } from '../features/openSidebar';

import { useDispatch } from 'react-redux';

const useStyles = createStyles((theme) => ({
    control: {
        fontWeight: 500,
        display: 'block',
        width: '100%',
        padding: `5px`,
        color:
            theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,
        fontSize: theme.fontSizes.md,

        '&:hover': {
            backgroundColor:
                theme.colorScheme === 'dark'
                    ? theme.colors.dark[7]
                    : theme.colors.gray[0],
            color: theme.colorScheme === 'dark' ? theme.white : theme.black,
        },
    },

    link: {
        fontWeight: 500,
        display: 'block',
        textDecoration: 'none',
        padding: `5px`,
        paddingLeft: 31,
        marginLeft: 30,
        fontSize: theme.fontSizes.md,
        color:
            theme.colorScheme === 'dark'
                ? theme.colors.dark[0]
                : theme.colors.gray[7],
        borderLeft: `1px solid ${
            theme.colorScheme === 'dark'
                ? theme.colors.dark[4]
                : theme.colors.gray[3]
        }`,

        '&:hover': {
            backgroundColor:
                theme.colorScheme === 'dark'
                    ? theme.colors.dark[7]
                    : theme.colors.gray[0],
            color: theme.colorScheme === 'dark' ? theme.white : theme.black,
        },
    },

    chevron: {
        transition: 'transform 200ms ease',
    },
}));

interface LinksGroupProps {
    icon: TablerIcon;
    label: string;
    initiallyOpened?: boolean;
    links?: { label: string; link: string }[];
}

export function LinksGroup({
    icon: Icon,
    label,
    initiallyOpened,
    links,
}: LinksGroupProps) {
    const navigate = useNavigate();

    const dispatch = useDispatch();

    const { classes, theme } = useStyles();
    const hasLinks = Array.isArray(links);
    const [opened, setOpened] = useState(initiallyOpened || false);
    const ChevronIcon =
        theme.dir === 'ltr' ? IconChevronRight : IconChevronLeft;
    const items = (hasLinks ? links : []).map((link) => (
        <Text
            style={{
                cursor: 'pointer',
                padding: '5px',
            }}
            className={classes.link}
            key={link.label}
            onClick={() => {
                dispatch(toggle());
                return navigate(link.link);
            }}
        >
            {link.label}
        </Text>
    ));

    return (
        <>
            <UnstyledButton
                onClick={() => setOpened((o) => !o)}
                className={classes.control}
            >
                <Group position="apart" spacing={0}>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <ThemeIcon variant="light" size="">
                            <Icon size="1.125rem" />
                        </ThemeIcon>
                        <Box ml="md">{label}</Box>
                    </Box>
                    {hasLinks && (
                        <ChevronIcon
                            className={classes.chevron}
                            size={14}
                            stroke={1.5}
                            style={{
                                transform: opened
                                    ? `rotate(${
                                          theme.dir === 'rtl' ? -90 : 90
                                      }deg)`
                                    : 'none',
                            }}
                        />
                    )}
                </Group>
            </UnstyledButton>
            {hasLinks ? <Collapse in={opened}>{items}</Collapse> : null}
        </>
    );
}

const mockdata = {
    label: 'Releases',
    icon: IconCalendarStats,
    links: [
        { label: 'Upcoming releases', link: '/' },
        { label: 'Previous releases', link: '/' },
        { label: 'Releases schedule', link: '/' },
    ],
};

export function NavbarLinksGroup() {
    return (
        <Box
            sx={(theme) => ({
                minHeight: 220,
                padding: theme.spacing.xl,
                backgroundColor:
                    theme.colorScheme === 'dark'
                        ? theme.colors.dark[6]
                        : theme.white,
            })}
        >
            <LinksGroup {...mockdata} />
        </Box>
    );
}
