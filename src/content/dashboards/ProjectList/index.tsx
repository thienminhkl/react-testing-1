import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Avatar, AvatarGroup, Button, Stack, Typography } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

function stringToColor(string: string) {
    let hash = 0;
    let i;

    /* eslint-disable no-bitwise */
    for (i = 0; i < string.length; i += 1) {
        hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }

    let color = '#';

    for (i = 0; i < 3; i += 1) {
        const value = (hash >> (i * 8)) & 0xff;
        color += `00${value.toString(16)}`.slice(-2);
    }
    /* eslint-enable no-bitwise */

    return color;
}

function namePra(name: string) {
    if (name.includes(' ')) {
        return `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`;
    } else {
        return `${name.charAt(0)}`
    }

}

function stringAvatar(name: string) {
    return {
        sx: {
            bgcolor: stringToColor(name),
        },

        children: namePra(name),
    };
}

const list = [
    {
        id: 1,
        projectName: 'Big project',
        category: 'dự án web',
        creator: {
            id: '1',
            name: 'Quỳ Hợp',
            avatar: ''
        },
        member: [
            {
                id: '5',
                name: 'Trầm Vụn',
                avatar: ''
            },
            {
                id: '7',
                name: 'Lĩnh Nga',
                avatar: ''
            },
        ],
    },
    {
        id: 2,
        projectName: 'Big project2',
        category: 'dự án web2',
        creator: {
            id: '2',
            name: 'Quỳ Hợp',
            avatar: ''
        },
        member: [
            {
                id: '6',
                name: 'Lim Dam',
                avatar: ''
            },
            {
                id: '9',
                name: 'Ma',
                avatar: ''
            },
        ],
    },
    {
        id: 4,
        projectName: 'Big project4',
        category: 'dự án web5',
        creator: {
            id: '3',
            name: 'Ánh Tuyết',
            avatar: ''
        },
        member: [
            {
                id: '5',
                name: 'Trầm Vụn',
                avatar: ''
            },
            {
                id: '6',
                name: 'Lim Dam',
                avatar: ''
            },
            {
                id: '9',
                name: 'Ma',
                avatar: ''
            },
        ],
    },
]

export default function ProjectList() {
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell>Id</StyledTableCell>
                        <StyledTableCell align="left">Project name</StyledTableCell>
                        <StyledTableCell align="left">Category</StyledTableCell>
                        <StyledTableCell align="left">Creator</StyledTableCell>
                        <StyledTableCell align="center">Member</StyledTableCell>
                        <StyledTableCell align="center" sx={{ maxWidth: 75 }}>Action</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {list.map((row) => (
                        <StyledTableRow key={row.id}>
                            <StyledTableCell>
                                {row.id}
                            </StyledTableCell>
                            <StyledTableCell>
                                {row.projectName}
                            </StyledTableCell>
                            <StyledTableCell align="left">{row.category}</StyledTableCell>
                            <StyledTableCell align="left">{row.creator.name}</StyledTableCell>
                            <StyledTableCell >{row.member.map((mem) =>
                                <Stack key={mem.id} direction="row" spacing={2}>
                                    <Avatar {...stringAvatar(`${mem.name}`)}/>
                                </Stack>

                            )}</StyledTableCell>
                            <StyledTableCell sx={{ maxWidth: 75 }}>
                                <Stack direction={'row'}>
                                    <Button><EditIcon /></Button>
                                    <Button><DeleteIcon /></Button>
                                </Stack>
                            </StyledTableCell>
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}