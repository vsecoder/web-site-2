import { Icons } from "@/components/icons"
import { MainChart } from "@/components/main-chart"
import Image from "next/image"
import Link from "next/link"

export default function IndexPage() {
  return (
    <>
      <section className="container grid items-center gap-6 pb-4 pt-8 md:py-16">
        <h1 className="text-center text-3xl font-medium leading-tight md:text-6xl">
          Используй <br />
          Hikka юзербот <br />
          по полной с нами!
        </h1>
        <div className="flex items-center justify-center space-x-2">
          <Icons.zap className="size-5 md:size-8" />
          <p className="text-center text-lg md:text-xl">3.000+ пользователей</p>
        </div>
      </section>

      <section className="container grid items-center gap-3 px-3 pb-3 pt-4 md:grid-cols-2 md:py-5">
        <MainChart />
        <div className="grid h-full items-center gap-3 md:grid-cols-2">
          <div className="flex h-full flex-col justify-center rounded-lg border bg-card p-5 text-card-foreground shadow-sm">
            <div className="flex gap-2 pb-2 align-middle"><Icons.gauge /> <h3 className="text-lg md:text-xl">Быстрота</h3></div>
            <p className="text-sm md:text-sm">Всего несколько нажатий, и вы наш дорогой клиент.</p>
          </div>
          <div className="flex h-full flex-col justify-center rounded-lg border bg-card p-5 text-card-foreground shadow-sm">
            <div className="flex gap-2 pb-2 align-middle"><Icons.armchair /> <h3 className="text-lg md:text-xl">Удобство</h3></div>
            <p className="text-sm md:text-sm">Можете управлять вашим хостом из бота или панели.</p>
          </div>
          <div className="flex h-full flex-col justify-center rounded-lg border bg-card p-5 text-card-foreground shadow-sm">
            <div className="flex gap-2 pb-2 align-middle"><Icons.box /> <h3 className="text-lg md:text-xl">Простота</h3></div>
            <p className="text-sm md:text-sm">Никаких лишних действий, только понятные всем кнопки.</p>
          </div>
          <div className="flex h-full flex-col justify-center rounded-lg border bg-card p-5 text-card-foreground shadow-sm">
            <div className="flex gap-2 pb-2 align-middle"><Icons.shield /> <h3 className="text-lg md:text-xl ">Безопасность</h3></div>
            <p className="text-sm md:text-sm">Мы ручаемся головой за безопасность ваших данных.</p>
          </div>
          <div className="flex h-full flex-col justify-center rounded-lg border bg-card p-5 text-card-foreground shadow-sm">
            <div className="flex gap-2 pb-2 align-middle"><Icons.fingerprint /> <h3 className="text-lg md:text-xl">Надёжность</h3></div>
            <p className="text-sm md:text-sm">Сервисы всегда доступны благодаря нашей стабильной инфраструктуре.</p>
          </div>
          <div className="flex h-full flex-col justify-center rounded-lg border bg-card p-5 text-card-foreground shadow-sm">
            <div className="flex gap-2 pb-2 align-middle"><Icons.lifebuoy /> <h3 className="text-lg md:text-xl">Поддержка</h3></div>
            <p className="text-sm md:text-sm">Круглосуточная техподдержка готова помочь вам в любое время.</p>
          </div>
        </div>
      </section>

      <section className="container grid w-full items-center px-3 pb-4">
        <h2 className="pb-6 pt-8 text-2xl font-medium leading-tight md:text-3xl">
          Отзывы:
        </h2>
        <div className="w-full overflow-x-auto">
          <div className="flex w-fit gap-3">
            <div className="flex w-80 flex-col items-center rounded-lg border bg-card p-5 text-card-foreground shadow-sm md:w-[25%]">
              <div className="mb-3 flex items-center gap-3">
                <h3 className="text-lg font-semibold">QWZX</h3>
              </div>
              <p className="text-sm">
                Максимально крутой хостинг! Быстрый пинг (57, иногда даже 47), удобное управление через Telegram и веб-панель. 
                Полностью доволен сервисом!<br /><br />
                Оценка: <span className="font-bold">10/10</span>, просто имба!
              </p>
            </div>
            <div className="flex w-80 flex-col items-center rounded-lg border bg-card p-5 text-card-foreground shadow-sm md:w-[25%]">
              <div className="mb-3 flex items-center gap-3">
                <h3 className="text-lg font-semibold">Anonim</h3>
              </div>
              <p className="text-sm">
                Мне понравился HikkaHost тем что он очень шустрый, красивый, конечно с бетта но с web панелью и это очень круто, вообщем мне очень понравилось) спасибо вам за такой прекрасный хост  HikkaHost )
              </p>
            </div>
            <div className="flex w-80 flex-col items-center rounded-lg border bg-card p-5 text-card-foreground shadow-sm md:w-[25%]">
              <div className="mb-3 flex items-center gap-3">
                <h3 className="text-lg font-semibold">SLEEPZ</h3>
              </div>
              <p className="text-sm">
                Купил хостинг, сделали всё буквально за пару минут, у самого хоста всё работает прекрасно и с минимальным пингом, спасибо! 💜
              </p>
            </div>
            <div className="flex w-80 flex-col items-center rounded-lg border bg-card p-5 text-card-foreground shadow-sm md:w-[25%]">
              <div className="mb-3 flex items-center gap-3">
                <h3 className="text-lg font-semibold">Safaruia//RTFH</h3>
              </div>
              <p className="text-sm">
                хост имба,не надо 300 лет ждать пока тебе подключат все что нужно,и работает вполне стабильно.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="container grid items-center gap-3 px-3 pb-3 pt-4 md:grid-cols-2 md:pt-16">
        <h2 className="text-2xl font-medium leading-tight md:text-3xl">
          Контакты
        </h2>
        <div className="grid gap-3">
          <p><strong>Почта:</strong> <Link href="mailto:support@hikka.host">support@hikka.host</Link></p>
          <p><strong>Телефон:</strong> <Link href="tel:+79102665599">+7 (910) 266-55-99</Link></p>
        </div>
      </section>

      <section className="container grid items-center gap-3 px-3 pb-3 pt-4 md:grid-cols-2 md:pt-16">
        <h2 className="text-2xl font-medium leading-tight md:text-3xl">
          Условия возврата и отмены платежа
        </h2>
        <div className="grid gap-3">
          <p>Возврат средств возможен в течение 14 дней с момента покупки при условии, что услуга не была использована. Для отмены платежа свяжитесь с нашей поддержкой.</p>
        </div>
      </section>

      <section className="container grid items-center gap-3 px-3 pb-3 pt-4 md:grid-cols-2 md:pt-16">
        <h2 className="text-2xl font-medium leading-tight md:text-3xl">
          Лицензия и согласие правообладателя
        </h2>
        <div className="grid gap-3">
          <p>Мы обладаем всеми необходимыми лицензиями на продажу интеллектуальной собственности. Согласие правообладателя на реализацию товара с его товарным знаком подтверждено.</p>
        </div>
      </section>

      <section className="container grid items-center gap-3 px-3 pb-3 pt-4 md:grid-cols-2 md:pt-16">
        <h2 className="text-2xl font-medium leading-tight md:text-3xl">
          Политика обработки персональных данных
        </h2>
        <div className="grid gap-3">
          <p>Мы соблюдаем все требования законодательства в области обработки персональных данных. Подробнее можно ознакомиться в нашей <Link href="https://blog.hikkahost.tech/user_agreement" className="text-blue-300">Политике конфиденциальности</Link>.</p>
        </div>
      </section>

      <section className="container grid items-center gap-3 px-3 pb-3 pt-4 md:grid-cols-2 md:pt-16">
        <h2 className="text-2xl font-medium leading-tight md:text-3xl">
          Договор оферты
        </h2>
        <div className="grid gap-3">
          <p>Ознакомиться с договором оферты можно по <Link href="https://blog.hikkahost.tech/offer-agreement" className="text-blue-300">ссылке</Link>.</p>
        </div>
      </section>
    </>
  )
}