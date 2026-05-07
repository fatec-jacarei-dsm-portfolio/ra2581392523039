import { motion } from 'framer-motion';
import styles from './SpotifyWidget.module.css';

export default function SpotifyWidget() {
  // Simulação de música tocando
  const currentSong = {
    title: 'Starboy',
    artist: 'The Weeknd',
    isPlaying: true
  };

  return (
    <motion.div 
      className={styles.widget}
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      whileHover={{ scale: 1.05 }}
    >
      <div className={styles.icon}>
        <svg viewBox="0 0 24 24" fill="#1DB954" width="20" height="20">
          <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.491 17.306c-.215.353-.676.467-1.029.252-2.871-1.752-6.485-2.149-10.74-1.173-.404.092-.811-.161-.903-.565-.092-.403.162-.811.565-.903 4.654-1.066 8.64-.613 11.848 1.341.353.215.468.676.259 1.048zm1.464-3.264c-.271.442-.848.581-1.289.311-3.287-2.019-8.3-2.613-12.185-1.433-.497.151-1.02-.128-1.171-.625-.152-.497.128-1.021.625-1.172 4.437-1.347 10.007-.665 13.71 1.604.442.27.581.848.31 1.315zm.126-3.419c-3.943-2.34-10.45-2.557-14.238-1.408-.605.183-1.246-.164-1.429-.769-.183-.605.164-1.246.769-1.429 4.354-1.322 11.558-1.067 16.126 1.644.544.323.722 1.026.4 1.57-.323.543-1.026.721-1.57.399z"/>
        </svg>
      </div>
      <div className={styles.info}>
        <div className={styles.status}>Ouvindo agora</div>
        <div className={styles.title}>{currentSong.title}</div>
        <div className={styles.artist}>{currentSong.artist}</div>
      </div>
      {currentSong.isPlaying && (
        <div className={styles.visualizer}>
          {[1, 2, 3, 4].map(i => (
            <motion.div 
              key={i}
              className={styles.bar}
              animate={{ height: [4, 12, 6, 14, 4] }}
              transition={{ repeat: Infinity, duration: 1, delay: i * 0.2 }}
            />
          ))}
        </div>
      )}
    </motion.div>
  );
}
