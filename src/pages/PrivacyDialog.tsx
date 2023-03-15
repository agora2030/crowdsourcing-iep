import { Checkbox, Dialog } from "@mui/material";
import React from "react";
import { PrivacyContent } from "./Privacy";

export interface DialogProps {
  open: boolean;
  onClose: () => void;
  acceptedTerms: boolean;
  setAcceptedTerms: (newState: boolean) => void;
}

export default function PrivacyDialog(props: DialogProps) {
  const { onClose, open, acceptedTerms, setAcceptedTerms } = props;

  return (
    <Dialog onClose={onClose} open={open}>
      <div style={{ margin: "25px" }}>
        <PrivacyContent />

        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Checkbox
            checked={acceptedTerms}
            onChange={() => {
              setAcceptedTerms(true);
              onClose()
              localStorage.setItem("acceptedTerms", "true");
            }}
            sx={{
              color: "#19417f",
              '&.Mui-checked': {
                color: "#19417f",
              },
            }}
          />
          <p className="normal">
            He leído y acepto la política de privacidad y uso de datos de este sitio.
          </p>
        </div>
      </div>
    </Dialog>
  );
}
