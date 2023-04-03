interface rangeProps {
    min: number
    max: number
    value: number
    setValue: Function
}


export default function RangeSlider( {min, max, value, setValue} : rangeProps ) {
    return (
        <div>
            <input
                type="range"
                className="transparent h-1.5 w-full self-center cursor-pointer rounded-full border-transparent border-none bg-zinc-300"
                id="customRange"
                value={value}
                step={0.25}
                min={min}
                max={max}
                onChange={(value) => setValue(value.target.value)}
                />
                
        </div>
    )
}