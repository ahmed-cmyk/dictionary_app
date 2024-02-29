export default function NotFound() {
  return (
    <section className='error-page'>
      <div className='error__emoji'>😕</div>
      <p className='error__title'>No Definitions Found</p>
      <p className='error__text'>
        Sorry pal, we couldn't find definitions for the word you were looking
        for. You can try the search again at later time or head to the web
        instead.
      </p>
    </section>
  );
}
