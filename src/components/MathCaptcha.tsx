import React, { useState, useEffect } from "react";
import {
  Typography,
  TextField,
  IconButton,
  InputAdornment,
  Paper,
  Tooltip
} from "@mui/material";
import RefreshIcon from "@mui/icons-material/Refresh";

type MathCaptchaProps = {
  onValidate: (isValid: boolean) => void;
};

const generateChallenge = () => {
  const a = Math.floor(Math.random() * 10) + 1;
  const b = Math.floor(Math.random() * 10) + 1;
  return { question: `${a} + ${b}`, answer: a + b };
};

const MathCaptcha: React.FC<MathCaptchaProps> = ({ onValidate }) => {
  const [challenge, setChallenge] = useState(generateChallenge());
  const [input, setInput] = useState("");
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    validate(input);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [input]);

  const validate = (value: string) => {
    const numeric = parseInt(value);
    if (value && numeric !== challenge.answer) {
      setError("Incorrect answer");
      onValidate(false);
    } else if (value) {
      setError(null);
      onValidate(true);
    } else {
      setError(null);
      onValidate(false);
    }
  };

  const regenerateChallenge = () => {
    setChallenge(generateChallenge());
    setInput("");
    setError(null);
    onValidate(false);
  };

  return (
    <Paper elevation={3} sx={{ p: 3, mt: 3, borderRadius: 2 }}>
      <Typography variant="h6" gutterBottom>
        Verify you're human
      </Typography>
      <Typography variant="body2" color="text.secondary" gutterBottom>
        Solve the math challenge below to continue:
      </Typography>

      <TextField
        fullWidth
        label={`What is ${challenge.question}?`}
        variant="outlined"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        error={!!error}
        helperText={error || " "}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <Tooltip title="New challenge">
                <IconButton onClick={regenerateChallenge} aria-label="refresh captcha">
                  <RefreshIcon />
                </IconButton>
              </Tooltip>
            </InputAdornment>
          ),
        }}
        sx={{ mt: 2 }}
      />
    </Paper>
  );
};

export default MathCaptcha;
