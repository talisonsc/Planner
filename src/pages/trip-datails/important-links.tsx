import { Link2, Plus } from "lucide-react"
import { Button } from "../../components/button"

export function ImportantLinks() {
  return (
    <div className="space-y-6">
      <h2 className="text-xl text-zinc-50 font-semibold">Links importantes</h2>
      <div className="flex items-center justify-between gap-4">
        <div className="space-y-1.5">
          <span className="block text-zinc-100">Reserva do AirBnB</span>
          <a
            className="block text-xs text-zinc-400 truncate hover:text-zinc-100"
            href="#"
          >
            https://www.airbnb.com.br/rooms/104700011aaassasafsafasfsafa
          </a>
        </div>
        <Link2 className="size-5 shrink-0 text-zinc-400" />
      </div>
      <div className="flex items-center justify-between gap-4">
        <div className="space-y-1.5">
          <span className="block text-zinc-100">Regras da casa</span>
          <a
            className="block text-xs text-zinc-400 truncate hover:text-zinc-100"
            href="#"
          >
            https://www.airbnb.com.br/rooms/104700011aaassasafsafasfsafa
          </a>
        </div>
        <Link2 className="size-5 shrink-0 text-zinc-400" />
      </div>

      <Button variant="secondary" size="full">
        <Plus className="size-5 text-zinc-200" />
        Cadastrar novo link
      </Button>
    </div>
  )
}
