// Enlace al CV en PDF, solo si el archivo existe en public/ al compilar.
// Así nunca se publica un enlace roto: al agregar el PDF, el botón aparece solo.
import { existsSync } from 'node:fs';
import { join } from 'node:path';
import { perfil } from '../data/perfil';
import { url } from './url';

export const cvHref: string | null = existsSync(join(process.cwd(), 'public', perfil.cv))
  ? url(perfil.cv)
  : null;
