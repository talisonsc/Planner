import { Plus, CircleCheck } from "lucide-react"
import { Button } from "../../components/button"
interface OpenCreateActivityModalProps {
  openCreateActivityModal: () => void
}

export function Activities({
  openCreateActivityModal,
}: OpenCreateActivityModalProps) {
  return (
    <div className="flex-1 space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="font-semibold text-3xl">Atividades</h2>

        <Button onClick={openCreateActivityModal} variant="primary">
          <Plus className="size-5 text-lime-950" />
          Cadastrar Atividade
        </Button>
      </div>
      <div className="space-y-8">
        <div className="space-y-2.5">
          <div className="flex items-baseline gap-2">
            <span className="text-xl text-zinc-300 font-semibold">Dia 17</span>
            <span className="text-xs text-zinc-400">Sabado</span>
          </div>
          <p className="text-zinc-500 text-sm">
            Nenhuma atividade cadastrada nessa data.
          </p>
        </div>
        <div className="space-y-2.5">
          <div className="flex items-baseline gap-2">
            <span className="text-xl text-zinc-300 font-semibold">Dia 18</span>
            <span className="text-xs text-zinc-400">Domingo</span>
          </div>
          <div className="px-4 py-1.5 rounded-xl bg-zinc-900 shadow-shape gap-3 flex items-center">
            <CircleCheck className="text-lime-300 size-5" />
            <span className="text-zinc-100">Corrida de Kart</span>
            <span className="text-zinc-400 text-sm ml-auto">14:00h</span>
          </div>
          <div className="px-4 py-1.5 rounded-xl bg-zinc-900 shadow-shape gap-3 flex items-center">
            <CircleCheck className="text-lime-300 size-5" />
            <span className="text-zinc-100">Academia em grupo</span>
            <span className="text-zinc-400 text-sm ml-auto">18:00h</span>
          </div>
        </div>
      </div>
    </div>
  )
}
