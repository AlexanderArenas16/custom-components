import * as React from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"

interface CustomCardProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string
  description?: string
  footer?: React.ReactNode
}

const CustomCard = React.forwardRef<HTMLDivElement, CustomCardProps>(
  ({ className, title, description, footer, children, ...props }, ref) => {
    return (
      <Card ref={ref} className={cn("w-[380px]", className)} {...props}>
        <CardHeader>
          <CardTitle>{title}</CardTitle>
          {description && <CardDescription>{description}</CardDescription>}
        </CardHeader>
        <CardContent>{children}</CardContent>
        {footer && <CardFooter>{footer}</CardFooter>}
      </Card>
    )
  }
)
CustomCard.displayName = "CustomCard"

export { CustomCard }