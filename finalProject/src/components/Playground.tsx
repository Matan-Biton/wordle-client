import { Attempt } from "./Attempt";

interface PlaygroundProps {
    entries: string[][]
}
export function Playground(props: PlaygroundProps) {
    const {entries} = props

    return (
        <>
            <div className="grid">
                {entries.map(entry => <Attempt attempt={entry}/>)}
            </div>
        </>
    )
}