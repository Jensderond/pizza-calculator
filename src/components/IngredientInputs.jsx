import { Input } from "./ui/input";
import { Label } from "./ui/label";

export default function IngredientInputs({
  portions,
  setPortions,
  portionSize,
  setPortionSize,
  hydration,
  setHydration,
  salt,
  setSalt,
}) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="space-y-2">
        <Label htmlFor="portions" className="text-lg font-semibold text-orange-700">
          Portions (Balls)
        </Label>
        <Input
          id="portions"
          type="number"
          value={portions}
          onChange={(e) => setPortions(Number(e.target.value))}
          min={1}
          className="bg-white border-2 border-orange-300 focus:border-orange-500"
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="portionSize" className="text-lg font-semibold text-orange-700">
          Portion Size (g)
        </Label>
        <Input
          id="portionSize"
          type="number"
          value={portionSize}
          onChange={(e) => setPortionSize(Number(e.target.value))}
          min={1}
          className="bg-white border-2 border-orange-300 focus:border-orange-500"
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="hydration" className="text-lg font-semibold text-orange-700">
          Hydration (%)
        </Label>
        <Input
          id="hydration"
          type="number"
          value={hydration}
          onChange={(e) => setHydration(Number(e.target.value))}
          min={0}
          max={100}
          className="bg-white border-2 border-orange-300 focus:border-orange-500"
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="salt" className="text-lg font-semibold text-orange-700">
          Salt (%)
        </Label>
        <Input
          id="salt"
          type="number"
          value={salt}
          onChange={(e) => setSalt(Number(e.target.value))}
          min={0}
          max={100}
          step={0.1}
          className="bg-white border-2 border-orange-300 focus:border-orange-500"
        />
      </div>
    </div>
  );
}
