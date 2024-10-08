import React from 'react';
import '../../Style/Calendar/Header.css';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { TextField } from '@mui/material';
import dayjs from 'dayjs';
import { useLocation } from 'react-router-dom';
import { FaBars } from "react-icons/fa";

export default function Header({ selectedDate, handleDatePickerChange, toggleSidebar }) {
    const location = useLocation();

    return (
        <div>
            <header className="header">
                <button className="toggle-btn" onClick={toggleSidebar}>
                    <FaBars />
                </button>
            </header>
            <br />

            {location.pathname === '/base/calendar' && (
                <div className="pick">
                    <div className="date-picker-container">
                        <label htmlFor="date-picker" >Search:</label>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DatePicker
                                id="date-picker"
                                value={dayjs(selectedDate)}
                                onChange={(date) => handleDatePickerChange(date ? date.toDate() : null)}
                                renderInput={(params) => (
                                    <TextField
                                        {...params}
                                        variant="outlined"
                                        size="small"
                                        style={{ height: '100%', color: 'white' }}
                                    />
                                )}
                            />
                        </LocalizationProvider>
                    </div>
                </div>
            )}

            {location.pathname === '/base/calendarEmp' && (
                <div className="pick">
                    <div className="date-picker-container">
                        <label htmlFor="date-picker" >Search:</label>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DatePicker
                                id="date-picker"
                                value={dayjs(selectedDate)}
                                onChange={(date) => handleDatePickerChange(date ? date.toDate() : null)}
                                renderInput={(params) => (
                                    <TextField
                                        {...params}
                                        variant="outlined"
                                        size="small"
                                        style={{ height: '100%', color: 'white' }}
                                    />
                                )}
                            />
                        </LocalizationProvider>
                    </div>
                </div>
            )}
        </div>
    );
}
