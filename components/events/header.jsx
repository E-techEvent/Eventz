import React, { useState } from "react";
import {
  Box,
  Button,
  Grid,
  Paper,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";

const Header = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  // Currently set to January 2025
  const [currentMonth, setCurrentMonth] = useState(0);
  const [currentYear, setCurrentYear] = useState(2025);

  // Initially selected dates matching the image
  const [selectedDates, setSelectedDates] = useState([8, 14, 17, 26, 27]);

  // Names of months for the header
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  // Days of the week for column headers
  const daysOfWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  // Get the first day of the month (0 = Sunday, 1 = Monday, etc.)
  const getFirstDayOfMonth = (month, year) => {
    // Adjust day number to match calendar layout (Monday as first day)
    let day = new Date(year, month, 1).getDay();
    return day === 0 ? 6 : day - 1; // Convert Sunday (0) to 6, and shift others
  };

  // Get number of days in the month
  const getDaysInMonth = (month, year) => {
    return new Date(year, month + 1, 0).getDate();
  };

  // Toggle date selection
  const handleDateClick = (day) => {
    if (selectedDates.includes(day)) {
      setSelectedDates(selectedDates.filter((date) => date !== day));
    } else {
      setSelectedDates([...selectedDates, day]);
    }
  };

  // Navigate to previous month
  const goToPreviousMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  };

  // Navigate to next month
  const goToNextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  };

  // Generate the calendar grid
  const generateCalendar = () => {
    const firstDay = getFirstDayOfMonth(currentMonth, currentYear);
    const daysInMonth = getDaysInMonth(currentMonth, currentYear);
    const daysInPrevMonth = getDaysInMonth(
      currentMonth === 0 ? 11 : currentMonth - 1,
      currentMonth === 0 ? currentYear - 1 : currentYear
    );

    const calendarDays = [];

    // Previous month's days
    for (let i = firstDay - 1; i >= 0; i--) {
      calendarDays.push({
        day: daysInPrevMonth - i,
        currentMonth: false,
        nextMonth: false,
      });
    }

    // Current month's days
    for (let i = 1; i <= daysInMonth; i++) {
      calendarDays.push({
        day: i,
        currentMonth: true,
        nextMonth: false,
      });
    }

    // Next month's days (to fill the grid)
    const remainingDays = 42 - calendarDays.length; // 6 rows * 7 days = 42
    for (let i = 1; i <= remainingDays; i++) {
      calendarDays.push({
        day: i,
        currentMonth: false,
        nextMonth: true,
      });
    }

    return calendarDays;
  };

  const handleBuyTicket = () => {
    alert(`Selected dates: ${selectedDates.join(", ")}`);
    // Here you would typically handle the ticket purchase logic
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        bgcolor: "#6a5acd",
        paddingTop: "50px",
        width: "100%", // Purple background matching the image
        minHeight: "100vh",
      }}
    >
      <Paper
        elevation={3}
        sx={{
          width: isMobile ? "95%" : "350px",
          p: 2,
          mb: 2,
          bgcolor: "white",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            mb: 2,
            alignItems: "center",
          }}
        >
          <Button onClick={goToPreviousMonth}>&lt;</Button>
          <Typography variant="h6" align="center">
            {months[currentMonth]} {currentYear}
          </Typography>
          <Button onClick={goToNextMonth}>&gt;</Button>
        </Box>

        <Grid container>
          {/* Days of week headers */}
          {daysOfWeek.map((day) => (
            <Grid item key={day} xs={12 / 7}>
              <Typography align="center" sx={{ fontWeight: "bold" }}>
                {day}
              </Typography>
            </Grid>
          ))}

          {/* Calendar days */}
          {generateCalendar().map((day, index) => (
            <Grid item xs={12 / 7} key={index}>
              <Box
                onClick={() => day.currentMonth && handleDateClick(day.day)}
                sx={{
                  height: "36px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  cursor: day.currentMonth ? "pointer" : "default",
                  bgcolor:
                    day.currentMonth && selectedDates.includes(day.day)
                      ? "#1a237e" // Dark blue for selected dates
                      : "transparent",
                  color: day.currentMonth
                    ? selectedDates.includes(day.day)
                      ? "white"
                      : "black"
                    : "#9e9e9e", // Gray for days of other months
                  borderRadius: "50%",
                  m: "2px",
                  "&:hover": {
                    bgcolor:
                      day.currentMonth && !selectedDates.includes(day.day)
                        ? "#e3f2fd"
                        : selectedDates.includes(day.day)
                        ? "#1a237e"
                        : "transparent",
                  },
                }}
              >
                {day.day}
              </Box>
            </Grid>
          ))}
        </Grid>
      </Paper>

      <Button
        variant="contained"
        sx={{
          bgcolor: "#1a237e",
          color: "white",
          "&:hover": {
            bgcolor: "#0d47a1",
          },
          fontSize: "16px",
          px: 4,
          py: 1,
        }}
        onClick={handleBuyTicket}
      >
        Buy Ticket
      </Button>
    </Box>
  );
};

export default Header;
