import { ArrowRight, Calendar, MapPin, Settings2, X } from "lucide-react"
import { Button } from "../../../components/button"
import { useState } from "react"
import { DateRange, DayPicker } from "react-day-picker"
import "react-day-picker/style.css"
import { format } from "date-fns"

interface DestinationAndDateStepProps {
  isGuestsInputOpen: boolean
  eventStartAndEndDate: DateRange | undefined
  closeGuestsInput: () => void
  openGuestsInput: () => void
  setDestination: (destination: string) => void
  setEventStartAndEndDate: (date: DateRange | undefined) => void
}

export function DestinationAndDateStep({
  isGuestsInputOpen,
  closeGuestsInput,
  openGuestsInput,
  setDestination,
  setEventStartAndEndDate,
  eventStartAndEndDate,
}: DestinationAndDateStepProps) {
  const [isDatePickerOpen, setIsDatePickerOpen] = useState(false)

  function openDatePickerModal() {
    setIsDatePickerOpen(true)
  }
  function closeDatePickerModal() {
    setIsDatePickerOpen(false)
  }

  const displayedDate =
    eventStartAndEndDate && eventStartAndEndDate.from && eventStartAndEndDate.to
      ? format(eventStartAndEndDate.from, "d' de 'LLL")
          .concat(" até ")
          .concat(format(eventStartAndEndDate.to, "d' até 'LLL"))
      : null

  return (
    <div className="h-16 bg-zinc-900 px-4 rounded-xl flex items-center shadow-shape gap-3">
      <div className="flex items-center gap-2 flex-1">
        <MapPin className="size-5 text-zinc-400" />
        <input
          disabled={isGuestsInputOpen}
          type="text"
          placeholder="Para onde você vai?"
          className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1"
          onChange={(event) => setDestination(event.target.value)}
        />
      </div>
      <button
        onClick={openDatePickerModal}
        disabled={isGuestsInputOpen}
        className="flex items-center gap-2 outline-none w-[240px]"
      >
        <Calendar className="size-5 text-zinc-400" />
        <span className="bg-transparent text-lg text-zinc-400 w-40 text-left flex-1">
          {displayedDate || "Quando ?"}
        </span>
      </button>
      {isDatePickerOpen && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
          <div className="bg-zinc-900 text-zinc-400 shadow-shape rounded-xl px-5 py-5 space-y-5 round">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold">Selecione uma data</h2>
                <button type="button" onClick={closeDatePickerModal}>
                  <X className="size-5 text-zinc-400" />
                </button>
              </div>
              <DayPicker
                mode="range"
                selected={eventStartAndEndDate}
                onSelect={setEventStartAndEndDate}
                classNames={{
                  selected: `bg-lime-300 border-lime-300 text-black rounded-full`, // Highlight the selected day
                  chevron: `fill-white`,
                }}
              />
            </div>
          </div>
        </div>
      )}

      <div className="w-px h-6 bg-zinc-800"></div>
      {isGuestsInputOpen ? (
        <button
          onClick={closeGuestsInput}
          className="bg-zinc-800 text-zinc-200 rounded-lg px-5 py-2 font-medium flex items-center gap-2 hover:bg-zinc-700 "
        >
          Altera local/data
          <Settings2 className="size-5 text-zinc-200" />
        </button>
      ) : (
        <Button onClick={openGuestsInput}>
          Continuar
          <ArrowRight className="size-5 text-lime-950" />
        </Button>
      )}
    </div>
  )
}
