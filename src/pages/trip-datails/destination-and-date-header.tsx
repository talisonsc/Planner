import { MapPin, Calendar, Settings2,} from "lucide-react";
import { Button } from "../../components/button";

export function DestinationAndDateHeader(){
  return (
    <div className="px-4 h-16 bg-zinc-900 rounded-xl shadow-shape flex items-center justify-between">
      <div className="flex items-center gap-2">
        <MapPin className="size-5 text-zinc-400" />
        <span className="text-zinc-100 ">Florianópolis, Brasil</span>
      </div>

      <div className="flex items-center gap-5">
        <div className="flex items-center gap-2">
          <Calendar className="size-5 text-zinc-400" />
          <span className="text-zinc-100 texts">17 a 23 de Agosto</span>
        </div>

        <div className="w-px h-6 bg-zinc-800" />

        <Button variant="secondary">
          Alterar Local e Data
          <Settings2 className="size-5 text-zinc-400" />
        </Button>
      </div>
    </div>
  )
}