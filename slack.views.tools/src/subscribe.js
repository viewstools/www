export default async email => {
  try {
    const res = await fetch('https://get-invite-sbmndwlhfe.now.sh/', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ email }),
    })
    return await res.json()
  } catch (err) {
    return err
  }
}
