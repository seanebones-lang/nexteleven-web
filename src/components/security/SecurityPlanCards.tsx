import Link from "next/link";
import { securityEmail, securityPlans } from "@/lib/security-services";
import styles from "@/app/security/security.module.css";

export function SecurityPlanCards({ detailed = false }: { detailed?: boolean }) {
  return <div className={detailed ? styles.planDetails : styles.planGrid}>
    {securityPlans.map((plan, index) => <article className={styles.plan} key={plan.id} id={detailed ? plan.id : undefined}>
      <div className={styles.planTop}><span>0{index + 1}</span><span>{plan.label}</span></div>
      <h3>{plan.name}</h3>
      <p className={styles.price}>{plan.from && <small>From </small>}<strong>{plan.price}</strong><span>USD · {plan.cadence}</span></p>
      <p>{plan.summary}</p>
      {detailed && <><ul>{plan.includes.map(item => <li key={item}>{item}</li>)}</ul><p className={styles.boundary}>{plan.boundary}</p></>}
      {detailed ? <a className={styles.planAction} href={securityEmail(plan.name + " — project fit")}>{plan.action} <span aria-hidden="true">↗</span></a> : <Link className={styles.planAction} href={{ pathname: "/security/pricing", hash: plan.id }}>What’s included <span aria-hidden="true">↗</span></Link>}
    </article>)}
  </div>;
}
