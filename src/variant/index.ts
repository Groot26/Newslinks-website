export const baselineTextVariant = {
    hidden: { transform: 'translateY(100%)', opacity: 0 },
    visible: {
        transform: 'translateY(0)',
        opacity: 1,
        transition: {
            duration: 1,
            ease: 'easeOut',
        },
    },
}

export const scaleVariant = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { scale: 1, opacity: 1 },
}

export const slideUpVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1 },
}

export const fadeInUpVariants = {
    visible: {
        opacity: 1,
        y: 50,
        transition: {
            duration: 1,
            delay: 0.2,
        },
    },
    hidden: {
        opacity: 0,
        y: 100,
    },
}
