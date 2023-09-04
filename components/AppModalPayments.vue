<template>
  <div>
    <button
      class="
        bg-[#F5EEFF]
        p-1
        rounded-md
        text-[#5E47D2]
        focus:bg-[#5E47D2]
        hover:bg-[#5E47D2]
        focus:text-[#F5EEFF]
        hover:text-[#F5EEFF]
      "
      data-modal-toggle="authentication-modal"
    >
      <svg
        width="18"
        height="18"
        viewBox="0 0 18 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M9 3.6C8.34901 3.6 7.72469 3.85286 7.26437 4.30294C6.80406 4.75303 6.54545 5.36348 6.54545 6C6.54545 6.63652 6.80406 7.24697 7.26437 7.69706C7.72469 8.14714 8.34901 8.4 9 8.4C9.65099 8.4 10.2753 8.14714 10.7356 7.69706C11.1959 7.24697 11.4545 6.63652 11.4545 6C11.4545 5.36348 11.1959 4.75303 10.7356 4.30294C10.2753 3.85286 9.65099 3.6 9 3.6ZM9 10C7.91502 10 6.87448 9.57857 6.10729 8.82843C5.3401 8.07828 4.90909 7.06087 4.90909 6C4.90909 4.93913 5.3401 3.92172 6.10729 3.17157C6.87448 2.42143 7.91502 2 9 2C10.085 2 11.1255 2.42143 11.8927 3.17157C12.6599 3.92172 13.0909 4.93913 13.0909 6C13.0909 7.06087 12.6599 8.07828 11.8927 8.82843C11.1255 9.57857 10.085 10 9 10ZM9 0C4.90909 0 1.41545 2.488 0 6C1.41545 9.512 4.90909 12 9 12C13.0909 12 16.5845 9.512 18 6C16.5845 2.488 13.0909 0 9 0Z"
          fill="currentColor"
        />
      </svg>
    </button>

    <!-- Main modal -->
    <div
      id="authentication-modal"
      tabindex="-1"
      aria-hidden="true"
      class="
        hidden
        overflow-y-auto overflow-x-hidden
        fixed
        top-0
        right-0
        left-0
        z-50
        w-full
        md:inset-0
        h-modal
        md:h-full
        fondo-modal
      "
    >
      <div class="relative p-4 h-full md:h-auto">
        <!-- Modal content -->
        <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
          <button
            type="button"
            class="
              absolute
              top-3
              right-2.5
              text-gray-400
              bg-transparent
              hover:bg-gray-200 hover:text-[#5E47D2]
              rounded-lg
              text-sm
              p-1.5
              ml-auto
              inline-flex
              items-center
              dark:hover:bg-gray-800 dark:hover:text-white
            "
            data-modal-toggle="authentication-modal"
          >
            <svg
              class="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
          <div class="py-6 px-6 lg:px-8">
            <h3
              class="
                text-xl
                font-medium
                text-gray-900
                dark:text-white
                text-left
              "
            >
              Detalle datos financieros
            </h3>

            <div class="flex justify-between">
              <div class="block">
                <app-table-modal-payments />
              </div>
            </div>

            <div
              class="
                flex
                items-center
                justify-between
                pt-4
                border-2 border-transparent border-t-indigo-500
              "
            >
              <h3
                class="
                  text-xl
                  font-bold
                  text-gray-900
                  dark:text-white
                  text-left
                "
              >
                Totales
              </h3>
              <div class="flex items-center">
                <label class="py-2 bg-gray-200 rounded-lg px-6 mx-1">sexo</label
                ><label class="py-2 bg-gray-200 rounded-lg px-6 mx-1"
                  >sexo</label
                >
              </div>
              <div class="flex items-center">
                <label class="py-2 bg-gray-200 rounded-lg px-6 mx-1">sexo</label
                ><label class="py-2 bg-gray-200 rounded-lg px-6 mx-1"
                  >sexo</label
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>



<script>
export default {
  name: 'AppModalPayments',
}
</script>

<style scoped>
.fondo-modal {
  height: 100vh;
  width: 100vw;
  background-color: rgb(131 131 131 / 50%);
  position: fixed;
  top: 0;
}
</style>
