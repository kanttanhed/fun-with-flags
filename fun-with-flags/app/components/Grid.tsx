type GridProps = {
    children: React.ReactNode;
}

const Grid = ({children}: GridProps) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {children}
        </div>
    )
}

export default Grid;