import { Search } from '@mui/icons-material';
import { IconButton, Paper } from '@mui/material';
import { useState } from 'react';
import { color } from '../constants/color';
import { useNavigate } from 'react-router-dom';
const SearchBar = () => {
    const [value, setValue] = useState('');
    const navigate = useNavigate();
    const SubmitHandler = (e) => {
        e.preventDefault();
        if (value) {
            navigate(`/search/${value}`)
        }
    }

    return (
        <Paper
            onSubmit={SubmitHandler}
            component={'form'}
            sx={{
                padding: '0px',
                border: `1px solid ${color.border_c}`,
                pl: 2, boxShadow: 'none',
                backgroundColor: color.background_c,
                borderRadius: 30
            }} className='form'>
            <input type="text"
                placeholder='Search'
                className='search-bar'
                value={value}
                onChange={e => setValue(e.target.value)} />
            <IconButton
                type='submit'
                onClick={SubmitHandler}
                sx={{
                    background: color.border_c,
                    borderRadius: '0px 30px 30px 0px',
                    p: '10px 20px 10px 20px'
                }}>
                <Search sx={{ color: color.white }} />
            </IconButton>
        </Paper>
    )
}

export default SearchBar