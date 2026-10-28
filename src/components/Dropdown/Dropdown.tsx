import Autocomplete from "@mui/material/Autocomplete";
import Box from "@mui/material/Box";
import InputAdornment from "@mui/material/InputAdornment";
import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";
import type { ReactNode } from "react";
import { tokens as t } from "../../tokens";

export interface DropdownOption<T extends string | number = string | number> {
  value: T;
  label: string;
  icon?: ReactNode;
}

export interface DropdownProps<T extends string | number = string | number> {
  options: DropdownOption<T>[];
  /** Valor seleccionado. Sin valor (o con uno que no está en las opciones) muestra el placeholder. */
  value?: T | null;
  onChange: (value: T) => void;
  label?: string;
  /** Mensaje de error: pinta el campo en rojo. */
  error?: string;
  disabled?: boolean;
  required?: boolean;
  /** Agrega un buscador: el campo pasa a ser un `Autocomplete`. Recomendado desde unas 8 opciones. */
  searchable?: boolean;
  /** Ordena las opciones alfabéticamente. Desactivar cuando el orden tiene significado. */
  sortOptions?: boolean;
  leftIcon?: ReactNode;
  id?: string;
  placeholder?: string;
  /** Texto cuando la búsqueda no encuentra opciones. */
  emptyText?: string;
}

const optionContent = (option: DropdownOption) => (
  <Box sx={{ display: "flex", alignItems: "center", gap: 3, minWidth: 0 }}>
    {option.icon}
    <span>{option.label}</span>
  </Box>
);

/**
 * Selector de opciones armado con MUI: un `TextField select`, o un `Autocomplete` con buscador si
 * es `searchable`. Reemplaza al `<select>` nativo cuando hacen falta íconos o buscador.
 */
export function Dropdown<T extends string | number = string | number>({
  options,
  value,
  onChange,
  label,
  error,
  disabled = false,
  required = false,
  searchable = false,
  sortOptions = true,
  leftIcon,
  id,
  placeholder = "Seleccionar...",
  emptyText = "No se encontraron resultados",
}: DropdownProps<T>) {
  const hasError = !!error?.trim();
  const selected = options.find((option) => option.value === value) ?? null;

  // Orden alfabético, dejando arriba la opción de valor vacío ("Todos", "Ninguno")
  const sorted = sortOptions
    ? [...options].sort((a, b) => {
        if (a.value === "") return -1;
        if (b.value === "") return 1;
        return a.label.localeCompare(b.label, undefined, {
          sensitivity: "base",
        });
      })
    : options;

  const startAdornment = leftIcon ? (
    <InputAdornment position="start" sx={{ color: t.inkSubtle }}>
      {leftIcon}
    </InputAdornment>
  ) : undefined;

  if (searchable) {
    return (
      <Autocomplete
        id={id}
        options={sorted}
        value={selected}
        disabled={disabled}
        noOptionsText={emptyText}
        getOptionLabel={(option) => option.label}
        isOptionEqualToValue={(a, b) => a.value === b.value}
        onChange={(_event, option) => {
          if (option) onChange(option.value);
        }}
        renderOption={({ key, ...props }, option) => (
          <li key={key} {...props}>
            {optionContent(option)}
          </li>
        )}
        renderInput={(params) => (
          <TextField
            {...params}
            label={label}
            required={required}
            error={hasError}
            helperText={hasError ? error : undefined}
            placeholder={placeholder}
            slotProps={{
              ...params.slotProps,
              input: { ...params.slotProps.input, startAdornment },
            }}
          />
        )}
      />
    );
  }

  return (
    <TextField
      select
      id={id}
      label={label}
      required={required}
      disabled={disabled}
      error={hasError}
      helperText={hasError ? error : undefined}
      value={selected ? selected.value : ""}
      onChange={(event) => {
        const next = options.find(
          (option) => option.value === event.target.value,
        );
        if (next) onChange(next.value);
      }}
      slotProps={{
        input: { startAdornment },
        select: {
          displayEmpty: true,
          renderValue: () =>
            selected ? (
              optionContent(selected)
            ) : (
              <span style={{ color: t.inkSubtle, fontWeight: 400 }}>
                {placeholder}
              </span>
            ),
        },
      }}
    >
      {sorted.map((option) => (
        <MenuItem key={option.value} value={option.value}>
          {option.icon}
          {option.label}
        </MenuItem>
      ))}
    </TextField>
  );
}
