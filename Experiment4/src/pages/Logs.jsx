import { useEffect, useCallback, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchLogs } from "../store/logSlice";
import Log from "./Log";
import {
  Container,
  Typography,
  List,
  Button,
  CircularProgress,
  Box,
} from "@mui/material";

const Logs = () => {
  const dispatch = useDispatch();
  const { data, status } = useSelector((state) => state.logs);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchLogs());
    }
  }, [status, dispatch]);

  const expensiveValue = useMemo(() => {
    let result = 0;
    for (let i = 0; i < 50000000; i++) {
      result += Math.random();
    }
    return result.toFixed(0);
  }, []);

  const handleRefresh = useCallback(() => {
    dispatch(fetchLogs());
  }, [dispatch]);

  if (status === "loading") {
    return (
      <Box sx={{ display: "flex", justifyContent: "center", padding: "1rem" }}>
        <CircularProgress />
      </Box>
    );
  }
  return (
    <Container sx={{ padding: "1rem" }}>
      <Typography variant="h5" gutterBottom>
        Daily Logs : redux
      </Typography>
      <Typography variant="body1" gutterBottom>
        High Computation Result: {expensiveValue}
      </Typography>
      <List>
        {data.map((log) => (
          <Log key={log.id} id={log.id} activity={log.activity} carbon={log.carbon} />
        ))}
      </List>

      <Button variant="contained" onClick={handleRefresh}>
        Reload logs
      </Button>
    </Container>
  );
};

export default Logs;