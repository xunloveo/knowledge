<template>
  <div class="home-bg">
    <div class="center">
      <div class="quotes">
        <p class="landIn">
          梦想，它像是一个目标，是一个让自己活下去的原动力，是一个让自己开心的原因，是一个会带你走过喜怒哀乐的旅程，是一个为自己画的蓝图！只要能够让心中怀抱着梦想的烛光，人生将因为有梦而更显美丽！勇敢做一个有梦的人，以坚决的信心，施以努力的奋斗，就有惊人的成就。
        </p>
      </div>
      <RouterLink to="/guide" class="link" v-if="show">开启奋斗之旅</RouterLink>
    </div>
  </div>
</template>

<style lang="scss">
.home-bg {
  position: absolute;
  left: 0;
  bottom: 0;
  right: 0;
  top: 0;
  background-image: linear-gradient(
      rgba(16, 16, 16, 0.8),
      rgba(16, 16, 16, 0.8)
    ),
    url(https://i.loli.net/2019/10/18/buDT4YS6zUMfHst.jpg);
  background-size: cover;
  // background: url('../public/home1.jpg') no-repeat center;
  // background-size: 100%;

  // background: #cccccc;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.center {
  width: 800px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: white;
}

@media (max-width: 768px) {
  .center {
    width: 90%;
  }
}

.quotes {
  font-size: 1.5rem;
}

.link {
  margin-top: 2rem;
  color: var(--c-bg);
  background-color: var(--c-brand);
  border-color: var(--c-brand);
  animation: landIn 0.8s ease-out both;

  display: inline-block;
  font-size: 1.2rem;
  padding: 0.8rem 1.6rem;
  border-width: 2px;
  border-style: solid;
  border-radius: 4px;
  transition: background-color 0.1s ease;
  box-sizing: border-box;

  &:hover {
    background-color: var(--c-brand-light);
  }
}

.landIn {
  display: flex;
  flex-wrap: wrap;
  line-height: 1.8;
  color: white;
  font-family: Lora, serif;
  white-space: pre;

  span {
    animation: landIn 0.8s ease-out both;

    &:first-child {
      text-indent: 2em;
    }
  }
}

@keyframes landIn {
  from {
    opacity: 0;
    transform: translateY(-20%);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>

<script setup>
import { onMounted, ref, onUnmounted } from 'vue'

const show = ref(false)

let timerId = 0

const move = () => {
  return new Promise((resolve, reject) => {
    try {
      let landInTexts = document.querySelectorAll('.landIn')
      landInTexts.forEach((landInText) => {
        let letters = landInText.textContent.split('')
        landInText.textContent = ''
        letters.forEach((letter, i) => {
          let span = document.createElement('span')
          span.textContent = letter
          span.style.animationDelay = `${i * 0.05}s`
          landInText.append(span)
        })
        clearTimeout(timerId)
        timerId = setTimeout(() => {
          resolve()
        }, (letters.length + 5) * 50)
      })
    } catch (error) {
      reject(error)
    }
  })
}
onMounted(async () => {
  await move()
  show.value = true
})
onUnmounted(() => {
  if (timerId) clearTimeout(timerId)
})
</script>