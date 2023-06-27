<template>
    <div class="card world-card loading">
        <img src="/img-blur.png" class="world-card__image" alt="img-blur"/>
        <div class="world-card__content">
            <div class="world-card__title"></div>
            <div class="world-card__text">
                <div class="stub"></div>
                <div class="stub"></div>
                <div class="stub"></div>
                <div class="stub"></div>
                <div class="stub"></div>
            </div>
            <div class="world-card__subtext"></div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.world-card {
    display: flex;

    padding: 18px 14px 24px 14px;

    flex-direction: column;
    align-items: center;
    gap: 20px;

    &__content {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 24px;
    }

    &__image {
        width: 208px;
        height: 240px;
    }

    &__title {
        min-width: 190px;
        min-height: 26px;
    }

    &__text {
        min-width: 190px;

        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 16px;

        .stub {
            min-width: 80px;
            height: 10px;

            &:nth-child(1) {width: 155px}
            &:nth-child(2) {width: 190px}
            &:nth-child(3) {width: 170px}
            &:nth-child(4) {width: 160px}
            &:nth-child(5) {width: 140px}
        }
    }

    &__subtext {
        min-width: 80px;
        min-height: 10px;
    }
}
.loading {
    .world-card__title,
    .world-card__subtext,
    .world-card__text .stub {
        background: var(--skeleton);
        
        background-size: 200% 100%;
        background-position-x: 180%;
        animation: 1s loading ease-in-out infinite;

        border-radius: var(--border-radius-xs);
    }
}
</style>